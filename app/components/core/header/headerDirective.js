empowerYourself
    .directive('topNavigation', function () {
        return {
            restrict: 'E',
            templateUrl: "./app/components/core/header/headerView.html",
            scope: true,
            replace: true,
            controller: 'header'
        }
    });