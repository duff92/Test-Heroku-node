"use strict";
angular.module('app.routes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {

	$routeProvider
		.when('/',{
			templateUrl : 'app/components/home/homeView.html',
			controller  : 'HomeCtrl'
		})
		.when('/test',{
			templateUrl : 'app/components/test/testView.html',
			controller  : 'TestCtrl'
		})
		.otherwise({
        	redirectTo: '/'
      	});

	$locationProvider.html5Mode(true);

});
