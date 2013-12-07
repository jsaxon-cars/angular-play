'use strict';

console.log("Got Here");
angular

	.module('sillyApp')

	.controller('SplendidCtrl', function ($scope, stuff, nav) {
    $scope.splendid_count = 0;
    $scope.max_splendid_count = 2;
    $scope.stuff = stuff;
    $scope.shmoopy = "What do you think?";
    $scope.blah = function () {
        $scope.shmoopy = $scope.shmoopy.split("").reverse().join("");
        $scope.splendid_count += 1;
        $scope.stuff.yes -= 1;
    }
})

;
