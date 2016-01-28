

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

	function getJobData () {
		var hit_list = [];
		var contact = [];
		var engagement = [];
		var hired = [];
		$http.get('/api/jobs')
	    	.success(function(data) {
		        for (i = 0; i < data.length; i++) {
		        	if (data[i].category === 'Hit List') {
		        		hit_list.unshift(data[i])
		        	} else if (data[i].category === 'Contact') {
		        		contact.unshift(data[i])
		        	} else if (data[i].category === 'Engagement') {
		        		engagement.unshift(data[i])
		        	} else if (data[i].category === 'Hired') {
		        		hired.unshift(data[i])
		        	}
		        }
		        $scope.hit_list = hit_list
		        $scope.contact = contact
		        $scope.engagement = engagement
		        $scope.hired = hired 
	    });
	}
	getJobData()

	$scope.processForm = function() {
		console.log('this is the form data', $scope.formData)
		$http({
			method  : 'POST',
			data    : $scope.formData,
			url 	: '/api/jobs'
 		})
 		.success(function(data) {
 			console.log(data);
 			getJobData(); 
        })
        $scope.formData = {}; 
  
	}
	$scope.delete = function(e) {
		console.log(e)
		$http({
			method  : 'POST',
			data    : {data: e},
			url 	: '/api/delete'
 		})
 		.success(function(data) {
 			console.log(data);
 			getJobData(); 
 		})
 		 

	}
}]);




