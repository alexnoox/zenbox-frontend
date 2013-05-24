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
    
    // Default coords
    angular.extend($scope, {
      center: {latitude: 47,longitude: 2},
      zoom: 4,
    });

    google.maps.visualRefresh = true;

    geolocationService.getCurrentPosition(function (position) {
      console.log("### GeolocCtrl - getCurrentPosition in" );
      console.log('### Position:\n' +
                  'Latitude: '              + position.coords.latitude          + '\n' +
                  'Longitude: '             + position.coords.longitude         + '\n' +
                  'Altitude: '              + position.coords.altitude          + '\n' +
                  'Accuracy: '              + position.coords.accuracy          + '\n' +
                  'Altitude Accuracy: '     + position.coords.altitudeAccuracy  + '\n' +
                  'Heading: '               + position.coords.heading           + '\n' +
                  'Speed: '                 + position.coords.speed             + '\n' +
                  'Timestamp: '             + position.timestamp);

      // Device coords
      angular.extend($scope, {
        center: {latitude: position.coords.latitude, longitude: position.coords.longitude},
        markers: [ {latitude: position.coords.latitude, longitude: position.coords.longitude}],
        zoom: 12,
      });

      console.log("### GeolocCtrl - getCurrentPosition out");
    });

    console.log('### GeolocCtrl out');
}
