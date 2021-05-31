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
    });
});

myApp.service('serviceOne', function () {
  //   let self = this;
  //   this.name = 'Service owner';
  //   this.nameLength = function () {
  //     return self.name.length;
  //   };
});

myApp.controller('mainController', [
  '$scope',
  '$log',
  '$timeout',
  '$filter',
  '$location',
  'serviceOne',
  function ($scope, $log, $timeout, $filter, $location, serviceOne) {
    $scope.people = [
      {
        name: 'Ashwin Balachandran',
        address: '555 Main St.',
        city: 'New York',
        state: 'NY',
        zip: '11111'
      },
      {
        name: 'Kartik Kunder',
        address: '666 Satan St.',
        city: 'Houston',
        state: 'TX',
        zip: '11121'
      },
      {
        name: 'Anish Kaul',
        address: '666 Mine St.',
        city: 'New York',
        state: 'NY',
        zip: '11141'
      }
    ];

    $scope.formattedAddress = function (person) {
      return `${person.address}, ${person.city}, ${person.state}, ${person.zip}`;
    };
  }
]);

myApp.controller('secondController', [
  '$scope',
  '$log',
  '$routeParams',
  'serviceOne',
  function ($scope, $log, $routeParams, serviceOne) {}
]);

myApp.directive('searchResult', function () {
  return {
    restrict: 'AECM',
    templateUrl: 'directives/searchresult.html',
    replace: true,
    scope: {
      personObject: '=',
      formattedAddressFunction: '&'
    },
    compile: function (elem, attrs) {
      console.log('Copmiling');
      console.log(elem.html());

      return {
        post: function (scope, element, attrs) {
          console.log('PostLinker');

          console.log(scope);

          if (scope.personObject.name == 'Anish Kaul') {
            element.removeAttr('class');
          }

          console.log(element);
        }
      };
    }
  };
});
