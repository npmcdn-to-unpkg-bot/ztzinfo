angular.module('Blog').filter('splitText', function () {
    return function (input, end, sep) {
        sep = typeof sep !== 'undefined' ? sep : '';
        return input.substring(0, end) + sep;
    };
});