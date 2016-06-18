angular.module('Blog').filter('splitText', function () {
    return function (input, end, sep) {
        sep = typeof sep !== 'undefined' ? sep : '';
        console.log(input, end, sep)
        return input.substring(0, end) + sep;
    };
});