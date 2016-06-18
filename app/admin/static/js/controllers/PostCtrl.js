angular.module('dash').controller('PostCtrl', function ($scope, $location, $http, $window) {

    $scope.submitPost = function () {
        // $location.path('/dashboard/post');
        console.log($scope.title);
        console.log($scope.body);
        var token = $window.localStorage['Token'];
        var auth = 'Bearer ' + token + ':blank';
        console.log(auth);
        console.log(token);
        var req = {
            method: 'POST',
            url: 'http://127.0.0.1:5000/admin/post',
            headers: {
                'Authorization': auth
            },
         data: {
            title: $scope.title,
            body: $scope.body,
            date: new Date(),
            }
        }

        $http(req).then(function (resp) {
            console.log('Postado: ' + resp);
        }, function (err) {
            console.log('Erro: ' + err);
        });
        return false;
    }

});
