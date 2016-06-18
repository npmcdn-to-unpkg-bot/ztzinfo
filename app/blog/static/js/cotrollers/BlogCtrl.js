angular.module('Blog').controller('BlogCtrl', function ($scope, getPosts, Pagination) {

    $scope.pagination = Pagination.getNew();

    getPosts.getPosts()
        .then(function (resp) {
            $scope.posts = resp.data;
            console.log($scope.posts);
            $scope.pagination.numPages = Math.ceil($scope.posts.length / $scope.pagination.perPage);
        });

});
