

	var app = angular.module('jobs',[]).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

		$routeProvider

		.when('/', {
            templateUrl: 'views/index.ejs',
            controller: 'JobsController'
        })

	}]);

	app.controller('JobsController', function(){
		this.products = jobs;
	});
