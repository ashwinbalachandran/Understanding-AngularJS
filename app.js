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

    
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', 'serviceOne', function($scope, $log, $routeParams, serviceOne){

}])


myApp.directive("searchResult", function() {
    return {
        restrict: 'AECM',
        template: '<a href="#" class="list-group-item"><h4 class="list-group-item-heading">Doe, John</h4><p class="list-group-item-text">555 Main St., New York, NY 11111</p></a>',
        replace: true
    }
});