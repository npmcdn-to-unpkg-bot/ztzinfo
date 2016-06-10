'use strict';

app.controller('PostCtrl', function($scope, $location) {

    $scope.submitPost = function() {
        // $location.path('/dashboard/post');
        console.log($scope.title);
        console.log($scope.body);

        return false;
    }

});
