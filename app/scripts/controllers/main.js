'use strict';

angular
    .module('sillyApp')

        .controller('MainCtrl', function ($scope, $route, $location, $routeParams, $rootScope) {
            console.log("MAIN CONTROLLER");
            console.log($route.current.$$route.originalPath);
            console.log($route.current.params);
            console.log($rootScope);
            console.log($location);
            console.log($routeParams);
            $scope.nav_tabs = [
                {name:'Home', url:"/home"},
                {name:'Contact', url:"/contact"},
                {name:'About', url:"/about"}g
            ];
            // I couldn't figure out how to do this directly in the HTML...  Didn't seem to know $location.path var on the page
            // Though it did know the $index inside the repeat.
            $scope.isActive = function (viewLocation) {
                console.log("Compare "+ viewLocation + " with " + $location.path());
                return viewLocation === $location.path();
            }
            console.log($scope.isActive("/home"));
            console.log($location.path());
        });

/*
        .controller('NavCtrl', function ($scope, $route, $rootScope, $routeParams) {
            $scope.nav_tabs = [
                {name:'Contact', url:"/contact"},
                {name:'About', url:"/about"},
                {name:'Home', url:"/home"}
            ];
            console.log("NAVIGATION CONTROLLER");  
            console.log($route.current.$$route.originalPath);
            console.log($route.current.params);
            console.log($rootScope);
            console.log($location);
            console.log($routeParams);
        });
*/