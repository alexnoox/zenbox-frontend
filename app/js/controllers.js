function UserListCtrl($scope, $http) {
  $http.get('http://zenbox-demo.herokuapp.com/zenbox-demo/rest/users/list').success(function(data) {
    $scope.users = data;
  });

  $scope.orderProp = 'lastName';
}
