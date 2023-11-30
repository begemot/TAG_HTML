var app = angular.module('configureAuto', []);

app.controller('configureApp', ['$scope', '$http', 'apgValues', function ($scope, $http, apgValues) {

    console.log(apgValues.enginesNames);
    console.log(apgValues.kpp);
    console.log(apgValues.wheels);

    $scope.resultList = null;

    $scope.engines = apgValues.enginesNames;
    $scope.kpp = apgValues.kpp;
    $scope.wheels = apgValues.wheels;

    $scope.activeEngineKey = null;
    if (_.size($scope.engines) == 1) {

        $scope.activeEngineKey = _.first(Object.keys($scope.engines))

    }

    $scope.activeGearBoxName = null;
    if (_.size($scope.kpp) == 1) {
        key = _.first(Object.keys($scope.kpp))
        $scope.activeGearBoxName = $scope.kpp[key]
    }

    $scope.activeWheelDriveName = null;
    if (_.size($scope.wheels) == 1) {
        key = _.first(Object.keys($scope.wheels))
        $scope.activeWheelDriveName = $scope.wheels[key]
    }

    $scope.activeEngine = function (key) {
        if ($scope.activeEngineKey == key) {
            $scope.activeEngineKey = null
        } else
            $scope.activeEngineKey = key
        console.log(key);
        getFilteredItems();
    }


    $scope.activeGearBox = function (name) {
        if ($scope.activeGearBoxName == name) {
            $scope.activeGearBoxName = null;
        } else
            $scope.activeGearBoxName = name;

        console.log(name);
        getFilteredItems();
    }

    $scope.activeWheelDrive = function (name) {
        if ($scope.activeWheelDriveName == name) {
            $scope.activeWheelDriveName = null
        } else
            $scope.activeWheelDriveName = name;

        console.log(name);
        getFilteredItems();
    }

    getFilteredItems();


    function getFilteredItems() {
        console.log('Обновляем');
        params = {
            activeWheelDriveName: $scope.activeWheelDriveName,
            activeEngineKey: $scope.activeEngineKey,
            activeGearBoxName: $scope.activeGearBoxName,
            complect: apgValues.complect,
            year:apgValues.year,
            model:apgValues.model,
            marka:apgValues.marka
        }

        $http({
            url: '/site/getFilteredItems',
            data: params,
            method: 'POST'

        }).then(function (responce) {
            $scope.resultList = responce.data
            console.log(responce);
        });
    }

}])