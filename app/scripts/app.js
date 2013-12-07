'use strict';

var app = angular

    .module('sillyApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngAnimate',
        'ui.router',
    ])

    .config(function ($stateProvider) {
        $stateProvider
            .state('home', {
                templateUrl: 'views/pages/main.html'
            })
            .state('about', {
                templateUrl: 'views/pages/about.html'
            })
            .state('contact', {
                templateUrl: 'views/pages/contact.html'
            });
    })

    .filter('reverse', function() {
        return function(items) {
            return items.slice().reverse();
        };
    })

    .factory('stuff', function () { 
        return  { 
            yes: 9999,
            getYes: function () { 
                console.log("Getyes INTERNAL: " + this.yes);
                return this.yes; 
            }
        }
    })

    .factory('nav', function ($state) {
        return {
            tabs: [
                {name:'Home', state:"home"},
                {name:'Contact', state:"contact"},
                {name:'About', state:"about"}
            ],
            start: 'home'
        }
    })

    .controller('MainCtrl', function ($scope, $state, nav, stuff) {
        //console.log("MAIN CONTROLLER");
        //console.log($route.current.$$route.originalPath);
        //console.log($route.current.params);
        //console.log($location);
        //console.log($routeParams);
        // This only seems to be getting called once...  
        $scope.nav_tabs = nav.tabs;
        console.log($scope.nav_tabs);
        console.log($state);
        $state.transitionTo(nav.start);
        console.log($state.current.name);
        $scope.$on('$stateChangeSuccess', function (event, toState, fromState, fromParams) {
            console.log(toState);
            $scope.page = toState.name;
            if (toState.name == 'home') { console.log("GOING HOME!!!!"); }
        });
    })

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
// Might need to do a watch on the service or

// restructure things...  easy... but with services...


//Watching things like this:

//$scope.$watch( 
//    // WHAT TO WATCH
//    function () { return siteDomain.domainSelected(); },   
//    // If the thing to watched changed, do this with the new value.
//    function (domain_selected) { $scope.domain_selected = domain_selected;},  
//    // DEEP INTROSPECTION
//    true 
//);
//    

/*
I can change this to a ui-router which would allow the view in view situation.

Thes states change, the url doesn't, but the views are handled .

So the issue is that MainCtrl is out of scope for the header....

What's another way I can render only part of the page?  Without ui-router?


*/
