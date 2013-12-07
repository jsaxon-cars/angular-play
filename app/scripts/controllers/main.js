use strict;

app.controller('MainCtrl', function ($scope, $state, nav, stuff) {
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

;
