"use strict";

var app = angular.module('zenbox', ['google-maps', 'phonegapServices']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/users', {templateUrl: 'partials/user-list.html',   controller: UserListCtrl}).
        when('/users/:userId', {templateUrl: 'partials/user-detail.html', controller: UserDetailCtrl}).
        when('/geoloc', {templateUrl: 'partials/geoloc.html', controller: GeolocCtrl}).
        when('/accelero', {templateUrl: 'partials/accelero.html', controller: AcceleroCtrl}).
        when('/notifications', {templateUrl: 'partials/notifications.html', controller: NotificationCtrl}).
        otherwise({redirectTo: '/users'});
}]);
