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
    .directive('toggleDropdown', function () {
        return {
            restrict: 'A',
            link: function (scope, element) {
                element.on('mouseenter mouseleave', function () {
                    //console.log("das")
                    if(element.hasClass('for-user')) {
                        element.children("ul").stop().animate({zoom: "toggle", opacity: "toggle"}, 200);
                    } else {
                        element.children("ul").stop().animate({width: "toggle", height: "toggle", opacity: "toggle"}, 200);

                    }
                });
                element.children("ul").children("label").on('click', function () {
                    //console.log("das")
                    element.children("ul").stop().animate({opacity: "toggle"}, 200);
                    element.children("ul").stop().delay(200).animate({opacity: "toggle"}, 200);
                });
            }
        };
    })
    .directive('init', function () {
        return {
            restrict: 'A',
            link: function (rootScope, scope) {

                rootScope.global = [];
                rootScope.global.viewClass = '';
                scope.authenticated = false;
                rootScope.global.user = {
                    "uid": 1,
                    "first_name": "Maximilian",
                    "last_name": "Mustermann",
                    "email": "maximilian.mustermann@company.com"
                };
                rootScope.global.user.navatar = rootScope.global.user.first_name.charAt(0).toUpperCase()
                    + rootScope.global.user.first_name.charAt(0).toUpperCase();

            }
        };
    });