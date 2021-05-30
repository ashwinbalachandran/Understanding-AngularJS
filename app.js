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

myApp.controller('mainController', ['$scope', '$log', '$timeout', '$filter', '$location', function($scope, $log, $timeout, $filter, $location) {


    $log.info($location.path());
    $scope.name = 'Ashwin Balachandran';
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
        console.log('Fatta G?');
    }, 2000);
    
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams){

    $scope.num = $routeParams.num || 0;
}])
