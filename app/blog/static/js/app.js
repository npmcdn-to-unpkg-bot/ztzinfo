var app = angular.module('Blog', ['ngRoute']);


app.config(function ($routeProvider){
    $routeProvider
    .when('/', {
        controller: 'MainController',
        templateUrl: 'static/views/posts.html'
    })
    .when('/sobre', {
        controller: 'SobreController',
        templateUrl: 'static/views/sobre.html'
    })
    .when('/arquivo', {
        controller: 'ArquivoController',
        templateUrl: 'static/views/arquivo.html'
    })
    .otherwise({
        redirectTo: '/'
    });

});
