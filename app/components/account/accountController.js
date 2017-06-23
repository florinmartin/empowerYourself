empowerYourself
    .controller('account', ['$scope', '$rootScope','$routeParams', '$location', '$http', function ($scope, $rootScope, $routeParams, $location, $http) {

        // Set view class
        $scope.initAccount = function() {
	        $(".view").addClass("account");
	        $rootScope.authenticated = false;
	        $rootScope.getNavigation();
	        $scope.type = $routeParams.page;
    	}
        // ----
        $scope.login = [];
        $scope.doLogin = function() {
        	if(username.value.length < 3 && password.value.length < 3 ) {
        		$(".view").addClass("hasError");
        	} else {
        		$rootScope.authenticated = true;
        		$location.path('learn/catalog')
        	}
        }
        $scope.doSignup = function() {
            if(email.value.length < 3 || firstname.value.length < 3 ) {
                $(".view").addClass("hasError");
            } else {
                $rootScope.authenticated = true;
                $location.path('account/autorize')
            }
        }

    }]);