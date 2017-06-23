empowerYourself
    .directive('bottomNavigation', function () {
        return {
            restrict: 'E',
            templateUrl: "./app/components/core/footer/footerView.html",
            scope: true,
            replace: true,
            controller: 'footer'
        }
    });