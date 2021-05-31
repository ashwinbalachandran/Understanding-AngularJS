var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'

    })
    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'

    })
})

myApp.service('serviceOne', function(){
    let self = this;
    this.name = 'Service owner';
    this.nameLength = function() {
        return self.name.length;
    }
})

myApp.controller('mainController', ['$scope', '$log', '$timeout', '$filter', '$location', 'serviceOne', function($scope, $log, $timeout, $filter, $location, serviceOne) {


    $scope.name = serviceOne.name;

    $scope.$watch('name', function(){
        serviceOne.name = $scope.name;
    })

    $scope.motive = '';
    $scope.maxMotiveLength = 7;
    $scope.rules = [
        { rulename: 'Must be 7 characters'},
        { rulename: 'Must not be used previously'},
        { rulename: 'Must be hard for the world to remeber'},
    ]

    $scope.wordsInYourMouth = function() {
        return $filter('lowercase')(`never ${$scope.motive}`);
    }

    $scope.alertClick = function() {
        alert('I hate alerts sorry g');
    }

    $timeout(function () {
        $scope.name = 'Silence';
    }, 2000);
    
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', 'serviceOne', function($scope, $log, $routeParams, serviceOne){

    $scope.name = serviceOne.name;
    $scope.$watch('name', function(){
        serviceOne.name = $scope.name;
    }) 
    $scope.num = $routeParams.num || 0;
}])
