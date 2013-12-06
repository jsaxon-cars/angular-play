'use strict';

var myApp = angular.module('sillyApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngAnimate'
    'ui.router'
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
    })
;

/*
I can change this to a ui-router which would allow the view in view situation.

Thes states change, the url doesn't, but the views are handled .

So the issue is that MainCtrl is out of scope for the header....

What's another way I can render only part of the page?  Without ui-router?


*/
