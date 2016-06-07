app.factory('getposts', ['$http', function($http) {
    return $http.get('http://localhost.localdomain:5000/post')
        .success(function(data) {
            console.log(data);
            return data;
        })
        .error(function(err) {
            return err;
        });
}]);
