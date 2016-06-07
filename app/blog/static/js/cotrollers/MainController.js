// app.controller('MainController', ['$scope', 'getposts', function ($scope, getposts) {
//     $scope.test = 'Blog';
//     getposts.success(function(data) {
//         $scope.posts = data;
//     });
// }]);

app.controller('MainController', ['$scope', function($scope){
    $scope.posts = [
        {
        title: 'So as gatas.',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'http://4.bp.blogspot.com/-zHRPoq40fjM/T5BnUGunnZI/AAAAAAAACSg/ZOL3JA5xRv8/s1600/Gatas_Micro_Biquini_52.jpg'
        },
        {
        title: 'Outro post.',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'http://4.bp.blogspot.com/-zHRPoq40fjM/T5BnUGunnZI/AAAAAAAACSg/ZOL3JA5xRv8/s1600/Gatas_Micro_Biquini_52.jpg'
        }
    ]
    }]);
