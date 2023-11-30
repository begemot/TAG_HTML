var app = angular.module('catalogAuto', []);

app.controller('catalogApp', ['$scope', '$http', 'apgValues', function ($scope, $http, apgValues) {
    $scope.baseType = apgValues.baseType;
    console.log($scope.baseType);
    // console.log(apgValues.kpp);
    // console.log(apgValues.wheels);

    $scope.resultList = null;
    $scope.fuelList = apgValues.fuelList;
    $scope.markaList = apgValues.markaList;
    $scope.yearList = apgValues.yearList;
    $scope.bodyTypeList = apgValues.bodyTypeList;

    if ($scope.baseType == null) {
        $scope.selected = {
            fuel: {},
            marka: {},
            year: {},
            bodyType: {}

        }
    } else {

        if ($scope.baseType == 'pickup')
            $scope.selected = {
                "fuel": {},
                "marka": {},
                "year": {},
                "bodyType": {
                    "0": "Полноразмерный пикап",
                    "61": "Среднеразмерный пикап",
                    "927": "Тяжелый пикап"
                }
            }

        if ($scope.baseType == 'allterrain')
            $scope.selected = {
                "fuel": {},
                "marka": {},
                "year": {},
                "bodyType": {
                    "17": "Внедорожник",
                    "57": "Кроссовер"
                }
            }

        if ($scope.baseType == 'sport')
            $scope.selected = {
                "fuel": {},
                "marka": {},
                "year": {},
                "bodyType": {
                    "25": "Купе"
                }
            }

        if ($scope.baseType == 'sedan')
            $scope.selected = {
                "fuel": {},
                "marka": {},
                "year": {},
                "bodyType": {
                    "593": "Седан"
                }
            }
        if ($scope.baseType == 'minivan')
            $scope.selected = {
                "fuel": {},
                "marka": {},
                "year": {},
                "bodyType": {
                    "10": "Минивэн"
                }
            }
        if ($scope.baseType == 'bus')
            $scope.selected = {
                "fuel": {},
                "marka": {},
                "year": {},
                "bodyType": {
                    "1979": "Автобус"
                }
            }
        if ($scope.baseType == 'electro'){
            $scope.selected = {
                "fuel": {
                    // "65": "Бензин/электричество",
                    "2431": "Электричество"
                },
                "marka": {},
                "year": {},
                "bodyType": {}
            }

        }
        if ($scope.baseType == 'marka'){
            $scope.selected = {
                "fuel": {},
                "marka": {
                    "20": "Toyota"
                },
                "year": {},
                "bodyType": {}
            }

        }
    }


    $scope.resetFilters = function () {
        let event = new Event('clearAllFilters');
        console.log(angular.element(document).find('body')[0])
        angular.element(document).find('body')[0].dispatchEvent(event)
    }
    $scope.fuelSelect = {
        title: 'Тип топлива',
        defaultItem: 'Выберите топливо',
        items: $scope.fuelList
    }
    $scope.markaSelect = {
        title: 'Марка',
        defaultItem: 'Выберите марку',
        items: $scope.markaList
    }
    $scope.yearSelect = {
        title: 'Год',
        defaultItem: 'Выбор года',
        items: $scope.yearList
    }
    $scope.bodyTypeSelect = {
        title: 'Кузов',
        defaultItem: 'Выбор кузова',
        items: $scope.bodyTypeList
    }
    $scope.getData = function () {
        console.log($scope.selected);
        $http({
            url: '/site/catalogFilteredResult',
            data: $scope.selected,
            method: 'POST'

        }).then(function (responce) {
            $scope.resultList = responce.data
            console.log(responce);
        });
    }
    $scope.selectCallback = function () {


        $scope.getData();

    }
    console.log($scope.selected);
    $scope.getData();
    console.log($scope.selected);

    // getFilteredItems();


    // function getFilteredItems() {
    //     console.log('Обновляем');
    //     params = {
    //         activeWheelDriveName: $scope.activeWheelDriveName,
    //         activeEngineKey: $scope.activeEngineKey,
    //         activeGearBoxName: $scope.activeGearBoxName,
    //         complect: apgValues.complect
    //     }
    //
    //     $http({
    //         url: '/site/getFilteredItems',
    //         data: params,
    //         method: 'POST'
    //
    //     }).then(function (responce) {
    //         $scope.resultList = responce.data
    //         console.log(responce);
    //     });
    // }

}])

app.directive('multiselect', function ($document) {
    return {
        restrict: 'C',
        scope: {
            data: '=',
            selectedItemsList: '=selected',
            сallback: '&'
        },
        templateUrl: 'themes/2020/assets/js/htmlTpl/multiselect.html',
        transclude: true,

        link: function (scope, element) {

            scope.dropdownView = true


            scope.dropDownList = scope.data.items
            console.log(scope.selected)
                //scope.selectedItemsList = {}

            scope.listView = false
            allDivs = element.find('div')

            scope.itemsListDom = null
            scope.itemsListDomWidth = 10;
            scope.selectWrapperDiv = null

            _.forEach(allDivs, function (value, key) {
                if (angular.element(value).hasClass('selectric-items')) {
                    scope.itemsListDom = value
                }
                if (angular.element(value).hasClass('selectric-wrapper')) {
                    scope.selectWrapperDiv = value
                }
            })

            $document.on('click', function (e) {
                if (element !== e.target && !element[0].contains(e.target)) {
                    scope.$apply(function () {
                        scope.listView = false
                        scope.styleText = 'none'
                    });
                }
            });

            scope.listToggle = function () {


                scope.itemsListDomWidth = scope.selectWrapperDiv.clientWidth

                scope.listView = !scope.listView
                if (scope.listView) {
                    scope.styleText = 'block'
                } else {
                    scope.styleText = 'none'
                }
            }

            scope.select = function (index) {

                scope.selectedItemsList[index] = scope.dropDownList[index]
                delete (scope.dropDownList[index])
                scope.сallback()

            }

            scope.deSelect = function (index) {
                scope.dropDownList[index] = scope.selectedItemsList[index]
                delete (scope.selectedItemsList[index])
                scope.сallback()


            }

            scope.selectedCount = function () {
                return _.size(scope.dropDownList)
            }

            angular.element(document).find('body')[0].addEventListener('clearAllFilters', function () {
                scope.dropDownList = scope.data.items

                scope.selectedItemsList = {}
            })

        }
    }
})