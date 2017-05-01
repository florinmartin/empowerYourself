empowerYourself
    .config(['$locationProvider', function ($locationProvider) {
        $locationProvider.hashPrefix('');
    }])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/learn/catalog", {
                templateUrl: "app/components/catalog/catalogView.html",
                scope: true,
                controller: "catalog"
            })
            .otherwise({
                templateUrl: "app/components/core/error/404.html",
                controller: "error"
            });
    });
