angular.module('Blog', ['ngRoute', 'simplePagination']);


angular.module('Blog').config(function ($routeProvider){
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
        controller: 'ArquivoCtrl',
        templateUrl: 'static/views/arquivo.html'
    })
    .otherwise({
        redirectTo: '/'
    });

});

angular.module('Blog').value('config', {
   baseUrl: 'http://jsonplaceholder.typicode.com'
});
