app.controller('BlogCtrl', function ($scope, getPosts) {
    getPosts.getPosts().then(function (resp) {
        $scope.posts = resp.data;
        console.log(data);
    });
});