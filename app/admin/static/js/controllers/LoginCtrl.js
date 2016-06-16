'use strict';

app.controller('LoginCtrl', function($scope, $http) {
    $scope.token = '';

    console.log('token: ' + $scope.token);


    $scope.login = function() {
        var username = $scope.username;
        var password = $scope.password;

        console.log(btoa(username + ":" + password));

        var url =  'http://' + window.location.host + '/admin/token';
        console.log(url);

        var req = {
            method: 'GET',
            url: url,
            headers: {
                // 'Content-Type': 'application/x-www-form-urlencoded',
                // 'Content-Type': 'multipart/form-data',
                'Authorization': 'Basic ' + btoa(username + ":" + password),
            },
            // data: { username: 'ztz', password: 'ztz' }
        };

        $http(req).then(function(data){
            console.log(data);
        }, function(data){
            console.log(data);
        });
    //
    //     // $http({
    //     //     url: url,
    //     //     method: "GET",
    //     //     // data: '',
    //     //     headers: {
    //     //         // 'Content-Type': 'application/json; charset=utf-8',
    //     //         'Authorization': 'Basic ' + btoa(username + ":" + password),
    //     //         }
    //     //     })
    //     //    .success(function (result) {
    //     //        $location.path('/dashboard');
    //     //        console.log(result);
    //     //        $scope.token = result.access_token;
    //     //    });
    //
    //     return false;
    }

    console.log('token: ' + $scope.token);


});
