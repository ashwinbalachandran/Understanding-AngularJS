var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$timeout', '$filter', function($scope, $timeout, $filter) {

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
