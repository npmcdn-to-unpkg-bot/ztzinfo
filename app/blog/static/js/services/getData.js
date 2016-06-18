app.factory('getPosts', function ($http, config) {
    var _getPosts = function () {
        return $http.get(config.baseUrl + '/posts');
    }
    return {
        getPosts: _getPosts
    };
});
