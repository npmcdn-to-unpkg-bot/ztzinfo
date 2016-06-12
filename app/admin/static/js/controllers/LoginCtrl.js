'use strict';

app.controller('LoginCtrl', function($scope, $location, $http) {
    $scope.token = '';

    console.log('token: ' + $scope.token);

    $scope.submit = function() {
        var username = $scope.username;
        var password = $scope.password;


        var url =  window.location.host + '/admin/token';

        $http({
            url: url,
            method: "GET",
            data: {username: username, password: password},
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': 'Basic ' + username+':'+password,
                }
            })
           .success(function (result) {
               $location.path('/dashboard');
               console.log(result);
               $scope.token = result.access_token;
           });

        return false;
    }

    console.log('token: ' + $scope.token);

});
