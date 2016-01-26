

var app = angular.module('jobs',['ngRoute'])

app.config(function($routeProvider) {

	$routeProvider
    .when('/', {
      templateUrl: 'home.html',
      controller: 'JobsController'
    })
})

app.controller('JobsController',
function($scope, $stateParams, posts){

});




