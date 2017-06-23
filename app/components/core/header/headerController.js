empowerYourself
	.controller('header', ['$scope', '$rootScope', '$location', '$http',
		function($scope, $rootScope, $location, $http) {

			$rootScope.getNavigation = function() {
				$http({
					method: 'GET',
					url: '/assets/json/main-navigation.json'
				}).then(function successCallback(response) {
						var navigation = response.data;
						$rootScope.navigation = [];
						angular.forEach(navigation, function(nav, key) {

							if(nav.dropdown) {
								angular.forEach(nav.dropdown, function(subnav, key) {
									if (subnav.link.indexOf('#' + $location.path()) >= 0) {
										subnav.active = true
										nav.active = true
									}
								});
							} else if (nav.link.indexOf('#' + $location.path()) >= 0) {
								nav.active = true
							}

							if ($rootScope.authenticated && (nav.privacy == "private" || nav.privacy == "global")) {
								$rootScope.navigation.push(nav);
							} else if (!$rootScope.authenticated && (nav.privacy == "public" || nav.privacy == "global")) {
								$rootScope.navigation.push(nav);
							}
						});
					},
					function errorCallback(response) {
						console.log("REST API not available")
					});
			}
			$rootScope.getNavigation();

		}
	]);