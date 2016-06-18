angular.module('Blog').filter('splitText', function () {
    return function (input, end) {
        console.log(input, end)
        return input.substring(0, end);
    };
});