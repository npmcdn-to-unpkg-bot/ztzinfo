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
        var req = {
            method: 'GET',
            url: 'http://127.0.0.1:5000/admin/token',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                'username': 'ztz',
                'password': 'ztz'
            }
        }
        // $http({
        //     method:'GET',
        //     url:'http://127.0.0.1:5000/admin/token',
        //     headers:
        //         {'Content-Type': 'application/json;charset=utf-8',
        //         'WWW-Authenticate': 'Basic'
        //         },
        //         data: {username:'ztz', password:'ztz'}
        //     })
        // $http.get('http://127.0.0.1:5000/admin/token', data)
        // $http(req)
        $http.get('http://127.0.0.1:5000/admin/token', {"username": $scope.username, "password":$scope.password})
           .success(function (result) {
               $location.path('/dashboard');
               console.log(result);
               $scope.token = result.access_token;
           });
    }
    console.log($scope.token);

});
