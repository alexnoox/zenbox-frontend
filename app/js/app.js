var myApp = angular.module('zenbox', ["google-maps"]);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/users', {templateUrl: 'partials/user-list.html',   controller: UserListCtrl}).
        when('/users/:userId', {templateUrl: 'partials/user-detail.html', controller: UserDetailCtrl}).
        when('/geoloc', {templateUrl: 'partials/geoloc.html', controller: GeolocCtrl}).
        otherwise({redirectTo: '/users'});
}]);
