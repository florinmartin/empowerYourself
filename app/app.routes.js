empowerYourself
    .config(['$locationProvider', function ($locationProvider) {
        $locationProvider.hashPrefix('');
    }])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/learn/my-learnings", {
                templateUrl: "html/my-learnings.html"
            })
            .otherwise({
                templateUrl: "index.html"
            });
    });
