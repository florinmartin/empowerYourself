'use strict';
var empowerYourself = angular.module('app', ['ngRoute', 'ngResource', 'ngSanitize', 'ngAnimate']);

empowerYourself
.directive('toggleClass', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.bind('click', function () {
                element.toggleClass(attrs.toggleClass);
            });
        }
    };
})