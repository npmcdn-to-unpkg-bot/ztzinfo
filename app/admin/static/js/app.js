'use strict';

angular.module('dash', [
    'ui.router',
    'ngAnimate',
    'toastr',
    ])
    .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('/dashboard', '/dashboard/home');
    $urlRouterProvider.otherwise('/login');

    $stateProvider
        .state('base', {
            abstract: true,
            url: '',
            templateUrl: 'static/views/base.html'
        })
        .state('login', {
            url: '/login',
            parent: 'base',
            templateUrl: 'static/views/login.html',
            controller: 'AuthCtrl',

            // resolve: {
            //     skipIfLoggedIn: skipIfLoggedIn
            // }
        })
        .state('logout', {
            url: '/logout',
            template: null,
            controller: 'LogoutCtrl',
        })
        .state('dashboard', {
            url: '/dashboard',
            parent: 'base',
            templateUrl: 'static/views/dashboard.html',
            controller: 'DashboardCtrl'
        })
        .state('home', {
            url: '/home',
            parent: 'dashboard',
            templateUrl: 'static/views/dashboard/home.html'
        })
        .state('reports', {
            url: '/reports',
            parent: 'dashboard',
            templateUrl: 'static/views/dashboard/reports.html'
        })
        .state('blog', {
            url: '/blog',
            parent: 'dashboard',
            templateUrl: 'static/views/dashboard/blog.html',
            controller: 'PostCtrl'
        });
    });

