var app = angular.module('Blog', ['ngRoute', 'simplePagination']);


app.config(function ($routeProvider){
    $routeProvider
    .when('/', {
        controller: 'BlogCtrl',
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

app.value('config', {
   baseUrl: 'http://jsonplaceholder.typicode.com'
});
