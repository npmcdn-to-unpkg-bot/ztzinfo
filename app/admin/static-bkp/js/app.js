var app = angular.module('Admin', ['ngRoute']);

app.config(function ($routeProvider){
    $routeProvider
    .when('/', {
        controller: 'DashboardController',
        templateUrl: 'static/views/dashboard.html'
    })
    .when('/create', {
        controller: 'CreatePostController',
        templateUrl: 'static/views/createPost.html'
    })
    .otherwise({
        redirectTo: '/'
    });

});
