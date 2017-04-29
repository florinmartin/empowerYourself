empowerYourself
    .controller('header', ['$scope', '$http', function ($scope, $http) {
        $scope.global = [];
        $scope.global.user = {
            "uid": 1,
            "first_name": "Maximilian",
            "last_name": "Mustermann",
            "email": "maximilian.mustermann@company.com"
        };
        $scope.global.user.navatar = $scope.global.user.first_name.charAt(0).toUpperCase()
            + $scope.global.user.first_name.charAt(0).toUpperCase();

        $http({method: 'GET', url: '/assets/json/main-navigation.json'}).then(function successCallback(response) {
            $scope.navigation =  response.data;
        }, function errorCallback(response) { console.log("REST API not available") });
        console.log($scope.navigation)

    }]);