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
            .when("/account/:page", {
                templateUrl: "app/components/account/accountView.html",
                scope: true,
                controller: "account"
            })
            .otherwise({
                redirectTo: "/account/login"
            });
    });
