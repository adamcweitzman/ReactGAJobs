

var app = angular.module('jobs',['ngRoute'])

app.config(['$routeProvider', function($routeProvider) {

	$routeProvider
    .when('/', {
      templateUrl: 'home.html',
      controller: 'JobsController'
    })
}])

app.controller('JobsController', ['$scope', '$http', function($scope, $http) {
	console.log('in scope')

	//need to sepeate data into arrays based on their category to display

	var hit_list = [];
	var contact = [];
	var engagement = [];
	var hired = [];

	$http.get('/api/jobs')
    	.success(function(data) {
	        $scope.jobs = data;
	        console.log('this is scope.jobs', $scope.jobs);
	        for (i = 0; i < data.length; i++) {

	        }
    })

	$scope.processForm = function() {
		console.log($scope.formData)
		$http({
			method  : 'POST',
			data    : $scope.formData,
			url 	: '/api/jobs'
 		})
 		.success(function(data) {
            console.log(data);
        })
        $scope.formData = {}
	}
}]);




