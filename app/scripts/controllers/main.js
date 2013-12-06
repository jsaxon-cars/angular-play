'use strict';

var myApp = 
angular // returns an angular module.
    .module('sillyApp')

        .controller('MainCtrl', function ($scope, $location) {
            //console.log("MAIN CONTROLLER");
            //console.log($route.current.$$route.originalPath);
            //console.log($route.current.params);
            //console.log($location);
            //console.log($routeParams);
            $scope.nav_tabs = [
                {name:'Home', url:"/home"},
                {name:'Contact', url:"/contact"},
                {name:'About', url:"/about"}
            ];
            // I couldn't figure out how to do this directly in the HTML...  Didn't seem to know $location.path var on the page
            // Though it did know the $index inside the repeat.
            $scope.isActive = function (viewLocation) {
                //console.log("Compare "+ viewLocation + " with " + $location.path());
                return viewLocation === $location.path();
            }
            //console.log($location.path());
        })
        // This re-runs 
        .controller('SplendidCtrl', function ($scope, $stuff) {
            $scope.splendid_count = 0;
            $scope.max_splendid_count = 2;
            $scope.randomguy = $stuff.yes;
            $scope.shmoopy = "Why when I change a tab does it go back to zero?";
            $scope.blah = function () {
                $scope.shmoopy = $scope.shmoopy.split("").reverse().join("");
                $scope.splendid_count += 1;
                $stuff.yes += 1;
            }
        })

        .factory('stuff', );

// Might need to do a watch on the service or

// restructure things...  easy... but with services...

/* Watching things like this:

$scope.$watch( 
    // WHAT TO WATCH
    function () { return siteDomain.domainSelected(); },   
    // If the thing to watched changed, do this with the new value.
    function (domain_selected) { $scope.domain_selected = domain_selected;},  
    // DEEP INTROSPECTION
    true 
);
//