'use strict';

angular.module('dash').controller('AuthCtrl', function($scope, $http, $location, $window, toastr) {

    $scope.login = function() {

        var username = $scope.username;
        var password = $scope.password;
        var url =  'http://' + window.location.host + '/admin/token';

        var req = {
            method: 'GET',
            url: url,
            headers: {
                'Authorization': 'Basic ' + btoa(username + ":" + password),
            }
        };

        $http(req).then(function(resp) {

            var token = resp.data.token;

            if (token !== '') {
                $window.localStorage['Token'] = token;
                $location.path('/dashboard');
            }
        }, function(err) {
            console.log('erro' + err);
            toastr.error(
                'Error!',
                {closeButton: true}
            );
            }
        );
    }
});
