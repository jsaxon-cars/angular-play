'use strict';

var myApp = angular.module('sillyApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/pages/main.html',
                controller: 'MainCtrl'
            })
            .when('/home', {
                templateUrl: 'views/pages/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/pages/about.html',
                controller: 'MainCtrl'
            })
            .when('/contact', {
                templateUrl: 'views/pages/contact.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .filter('reverse', function() {
        return function(items) {
            return items.slice().reverse();
        };
    });
;


