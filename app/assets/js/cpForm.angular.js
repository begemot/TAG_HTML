var app1 = angular.module('siteForms', []);

app1.controller('cpForm', ['$scope', '$http', function ($scope, $http) {
    $scope.formShow = true
    $scope.hasBeenSentPart = false;
    $scope.form = {
        leasingCheckbox: 'false',
        companyName: '',
        companyName: '',
        inn: '',
        email: '',
        phone: '',
        name: '',
        href:'',
        valid:''
    }
    $scope.sendForm = () => {

        $scope.form.href =  window.location.href
        $scope.form.valid = new Date().getHours();
        console.log($scope.form)

        $http({
            url: '/site/sendCpForm',
            data: $scope.form,
            method: 'POST'

        }).then(function (responce) {
            $scope.messageHasBeenSent();
            ym(95636405,'reachGoal','cpSent')
        });

    }

    $scope.messageHasBeenSent = ()=>{
        $scope.formShow = false
        $scope.hasBeenSentPart = true;
    }

}]);
