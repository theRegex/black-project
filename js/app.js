var hdio = angular.module('heardioApp', ['ui.router']);



hdio.controller('systemCenter', function($scope,$q,$rootScope){

	$scope.genres = []
	$scope.msg = "Loading..."
	$rootScope.endPoint = "/project-black/mock_api";
})

