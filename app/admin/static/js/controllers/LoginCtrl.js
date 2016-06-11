'use strict';

app.controller('LoginCtrl', function($scope, $location, $http) {

    $scope.token = '';
    console.log($scope.token);

    $scope.submit = function() {

        console.log($scope.username);
        console.log($scope.password);
        var data = {
            'username': $scope.username,
            'password': $scope.password
        };

        DoAuth(data);

        return false;
    }


    function DoAuth(data) {

        var uri = '/admin/token';

        if (window.location.port !== "") {
            var port = ':' + window.location.port;
            var url = window.location.port + port + uri;
        }
        else {
            var url = window.location.port + uri;
        }

        $http.get(url, data)
           .success(function (result) {
               $location.path('/dashboard');
               console.log(result);
               $scope.token = result.access_token;
           });
    }
    console.log($scope.token);

});
