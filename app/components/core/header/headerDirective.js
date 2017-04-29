empowerYourself
    .directive('topNavigation', function () {
        return {
            restrict: 'E',
            templateUrl: "./app/components/core/header/headerView.html",
            scope: true,
            replace: true,
            controller: 'header'
        }
    })
    .directive('toggleDropdown', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                element.on('mouseenter mouseleave', function () {
                    //console.log("das")
                    element.children("ul").stop().animate({height: "toggle", opacity: "toggle"}, 200);
                });
            }
        };
    });