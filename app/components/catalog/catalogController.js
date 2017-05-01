empowerYourself
    .controller('catalog', ['$scope', '$rootScope', '$http', function ($scope, $rootScope, $http) {

        // Mark the navigation entry for the catalog page
        $rootScope.navigation[1].active = $rootScope.navigation[1].dropdown[0].active = true;

        // Set view class
        $rootScope.global.viewClass = "catalog";

        // Get catalog list
        $http({method: 'GET', url: '/assets/json/lms.catalogs.json'}).then(function successCallback(response) {
            $scope.catalogList = response.data.catalogs;
        }, function errorCallback(response) { console.log("REST API not available") });
        $http({method: 'GET', url: '/assets/json/lms.courses.json'}).then(function successCallback(response) {
            $scope.courseList = response.data.courses;
        }, function errorCallback(response) { console.log("REST API not available") });

        // Play with data
        $scope.catalogSelected = "";
        $scope.catalogSelect = function(cat) {
            $scope.catalogSelected = cat;
        };
        var date2string = function(d) {
            return ("0" + d.getDate()).slice(-2) + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" +
                d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
        };
        var date2stringWtime = function(d) {
            return ("0" + d.getDate()).slice(-2) + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" +
                d.getFullYear();
        };
        $scope.courseDate2Meta = function (startDate, endDate){
            var status;
            var now = new Date();
            var startD = new Date(startDate);
            var endD = new Date(endDate);
            $scope.reminder = false;
            if(startD > now && endD > now) {
                status = "Start on " + date2string(endD);
                $scope.reminder = true;
            } else if (startD < now && endD > now) {
                status = "Available until " + date2string(endD);
                $scope.reminder = true;
            } else if (startD < now && endD < now) {
                status = "Ended on " + date2stringWtime(startD);
            } else if (startD < now && !endDate) {
                status = "Available now";
            } else {
                status = null;
            }
            return status
        };


    }]);