const { src, dest, parallel, series, watch } = require('gulp'),
		sass          	= require('gulp-sass')(require('sass')),
		
		
		sourcemaps    	= require('gulp-sourcemaps'),
		postcss			= require('gulp-postcss'),
		cssnano			= require('cssnano'),
		autoprefixer	= require('autoprefixer'),
		mqpacker		= require('css-mqpacker'),
		mqpackerSort	= require('sort-css-media-queries'),

		imagemin      	= require('gulp-imagemin'),
		newer			= require('gulp-newer'),

		webpack			= require('webpack'),
		gulpWebpack		= require('webpack-stream'),
		webpackConfig 	= require('./webpack.config.js'),
		uglify			= require('gulp-uglify-es').default,

		browserSync   	= require('browser-sync').create(),
		rename			= require('gulp-rename'),
		cachebust     	= require('gulp-cache-bust'),
		htmlReplace		= require('gulp-html-replace'),
		del 			= require('del');

const	gmWatch			= true;
let		stateLinkStyles	= false,
		speedMode		= false;
		sass.compiler	= require('sass');


// Local Server
liveReload = () => {
	browserSync.init({
		server: { baseDir: 'app' },
		notify: false
	})
}

// sass
exports.styles = styles = () => {
	const processors = [
		autoprefixer({
			grid: true,
			overrideBrowserslist: ['last 5 versions']
		})
	];

	return src('src/sass/main.sass')
		.pipe(sourcemaps.init()) 
		.pipe(sass({
			outputStyle: 'expanded',
			includePaths: [__dirname + '/node_modules']
		}).on('error', sass.logError))
		.pipe(postcss(processors))
		.pipe(sourcemaps.write())
		.pipe(dest('app/assets/css'))
		.pipe(browserSync.stream())
}

// speed Sass, without Autoprefixer
exports.speedStyles = speedStyles = () => {
	return src('src/sass/main.sass')
		.pipe(sourcemaps.init()) 
		.pipe(sass({
			outputStyle: 'expanded',
			includePaths: [__dirname + '/node_modules']
		}).on('error', sass.logError))
		.pipe(sourcemaps.write())
		.pipe(dest('app/assets/css'))
		.pipe(browserSync.stream())
}

// change Speed
changeSpeedMode = (cb) => {
	speedMode = true;
	cb();
}

// css
exports.css = css = () => {
	const processors = [
		//mqpacker(),
		autoprefixer({
			grid: true,
			overrideBrowserslist: ['last 10 versions']
		})
	];
	return src('app/assets/css/main.css')
		.pipe(postcss(processors))
		.pipe(dest('app/assets/css'));
}

// css minify
exports.cssMinify = cssMinify = () => {
	const processors = [
		cssnano()
	];
	return src('app/assets/css/main.css')
		.pipe(postcss(processors))
		.pipe(rename({suffix: '.min'}))
		.pipe(dest('app/assets/css'));
}

// Scripts
exports.scripts = scripts = () => {
	return src('src/js/index.js')
		.pipe(gulpWebpack(webpackConfig))
		.pipe(dest('app/assets/js'))
		.pipe(browserSync.stream());
}
exports.buildjs = buildScripts = async () => {
	const deletedPaths = await del([
		'app/assets/js/app.js.map'
	]);

	if (deletedPaths.length > 0) {
		console.log('Files deleted:');
		console.group();
		console.log(deletedPaths.join('\n'));
		console.groupEnd();
	}

	return src('app/assets/js/app.js')
		.pipe(uglify())
		.pipe(dest('app/assets/js/'))
}

// Produce images | Required graphicsmagick (sudo apt update; sudo apt install graphicsmagick)
exports.images = images = (cb) => {
	if (gmWatch) {
		return src('src/img/**/*')
			.pipe(newer('app/assets/img/'))
			.pipe(imagemin())
			.pipe(dest('app/assets/img/'));
	}
	cb();
}

// hash files | Updating the cache for users
exports.hash = hash = () => {
	return src('app/**/*.html')
		.pipe(cachebust({
			type: 'timestamp'
		}))
		.pipe(dest('app/'));
}

// set links | main.css <-> main.min.css
exports.setLinkStyles = setLinkStyles = () => {
	const linkStyles = (stateLinkStyles) ?
		'assets/css/main.min.css'
		: 'assets/css/main.css';

	return src('app/**/*.html')
		.pipe(htmlReplace({
			'css': linkStyles,
			'js' : [/*'assets/js/vendor.js', */'assets/js/app.js']
		}, { keepUnassigned: true, keepBlockTags: true }))
		.pipe(dest('app/'));
}
changeStateLinkStyles = (cb) => {
	stateLinkStyles = true;
	cb();
}

// delete main.min.css + app.js.map
exports.clearFiles = clearFiles = async () => {
	const deletedPaths = await del([
		'app/assets/css/main.min.css',
		'app/assets/js/app.js.map'
	]);
	if (deletedPaths.length > 0) {
		console.log('Files deleted:');
		console.group();
		console.log(deletedPaths.join('\n'));
		console.groupEnd();
	}
}

// watch
exports.watch = startWatch = () => {
	watch('app/**/*.html', {usePolling: true}).on('change', browserSync.reload);
	watch('src/js/**/*.js', {usePolling: true}, scripts);
	(speedMode)
		? watch('src/sass/**/*.sass', {usePolling: true}, speedStyles)
		: watch('src/sass/**/*.sass', {usePolling: true}, styles);
	gmWatch && watch('src/img/**/*.{jpg,jpeg,png,webp,svg}', {usePolling: true}, images);
}

exports.default = series(
	images,
	clearFiles,
	setLinkStyles,
	parallel(liveReload, styles, scripts, startWatch)
);
exports.speedDev = series(
	images,
	clearFiles,
	setLinkStyles,
	changeSpeedMode,
	parallel(liveReload, speedStyles, scripts, startWatch)
);
exports.build = series(
	images,
	clearFiles,
	styles,
	css,
	cssMinify,
	scripts,
	buildScripts,
	changeStateLinkStyles,
	setLinkStyles,
	hash
);