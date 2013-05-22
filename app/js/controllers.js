function UserListCtrl($scope, $http) {
  $http.get('http://zenbox-demo.herokuapp.com/zenbox-demo/rest/users/list').success(function(data) {
      $scope.users = data;
  });

  $scope.orderProp = 'lastName';
}

function UserDetailCtrl($scope, $routeParams, $http) {
    var url = 'http://zenbox-demo.herokuapp.com/zenbox-demo/rest/users/show/' + $routeParams.userId;
    $http.get(url).success(function(data) {
        $scope.user = data;
    });
}

function GeolocCtrl($scope, geolocation) {
    console.log('Tir!');
    geolocation.getCurrentPosition(function (position) {
        console.log('Latitude: '              + position.coords.latitude          + '\n' +
                      'Longitude: '             + position.coords.longitude         + '\n' +
                      'Altitude: '              + position.coords.altitude          + '\n' +
                      'Accuracy: '              + position.coords.accuracy          + '\n' +
                      'Altitude Accuracy: '     + position.coords.altitudeAccuracy  + '\n' +
                      'Heading: '               + position.coords.heading           + '\n' +
                      'Speed: '                 + position.coords.speed             + '\n' +
                      'Timestamp: '             + position.timestamp                + '\n');
  });
}
