'use strict';

app.controller('LoginCtrl', function($scope, $location) {

    $scope.submit = function() {
        $location.path('/dashboard');
        console.log($scope.username);
        console.log($scope.password);

        return false;
    }
});
