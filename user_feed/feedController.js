hdio.controller('feed', ['$scope','rootReference','g_utility', function($scope,rootReference,g_utility){
	$scope.msg = "View News Feed"
	$scope.init = function(){
			$scope.presentUser();
	}

}])