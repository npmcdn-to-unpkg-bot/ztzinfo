angular.module('dash').controller('LogoutCtrl', function($location, $window) {
    console.log('saindo');
    $window.localStorage.clear();
    $location.path('/login');

}
