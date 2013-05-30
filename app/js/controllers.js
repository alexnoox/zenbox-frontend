"use strict";

function UserListCtrl($scope, $http) {
  console.log('### UserDetailCtrl in');
  $http.get('http://zenbox-demo.herokuapp.com/zenbox-demo/rest/users/list').success(function(data) {
      $scope.users = data;
  });

  $scope.orderProp = 'lastName';
  console.log('### UserDetailCtrl out');
}

function UserDetailCtrl($scope, $routeParams, $http) {
  console.log('### UserDetailCtrl in');
  var url = 'http://zenbox-demo.herokuapp.com/zenbox-demo/rest/users/show/' + $routeParams.userId;
  $http.get(url).success(function(data) {
      $scope.user = data;
  });
  console.log('### UserDetailCtrl out');
}

function GeolocCtrl($scope, geolocationService) {
  console.log('### GeolocCtrl in');

  $scope.isMapElementHidden = true;

  // Default coords
  angular.extend($scope, {
    center: {latitude: 47,longitude: 2},
    zoom: 4,
  });

  var intervalId = setInterval(function () {
    geolocationService.getCurrentPosition(function (position) {
      $scope.isMapElementHidden = false;

      angular.extend($scope, {
        center: {latitude: position.coords.latitude, longitude: position.coords.longitude},
        markers: [ {latitude: position.coords.latitude, longitude: position.coords.longitude}],
        zoom: 12
      });

      console.log('Latitude: '      + position.coords.latitude          + '\n' +
          'Longitude: '             + position.coords.longitude         + '\n' +
          'Altitude: '              + position.coords.altitude          + '\n' +
          'Accuracy: '              + position.coords.accuracy          + '\n' +
          'Altitude Accuracy: '     + position.coords.altitudeAccuracy  + '\n' +
          'Heading: '               + position.coords.heading           + '\n' +
          'Speed: '                 + position.coords.speed             + '\n' +
          'Timestamp: '             + position.timestamp                + '\n');
    });
  }, 100);

  $scope.$on('$destroy', function () {
    clearInterval(intervalId);
  });

  console.log('### GeolocCtrl out');
}

function AcceleroCtrl($scope, accelerometerService) {
  console.log('### AcceleroCtrl in');

  var intervalId = setInterval(function () {
    accelerometerService.getCurrentAcceleration(function (acceleration) {
      $scope.acceleration = acceleration;
      console.log('acceleration: ' + acceleration)
    });
  }, 100);

  $scope.$on('$destroy', function () {
    clearInterval(intervalId);
  });

  console.log('### AcceleroCtrl out');
}


