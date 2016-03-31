hdio.controller('feed', ['$scope', function($scope){
	$scope.msg = "View News Feed"
	$scope.init = function(){
			$scope.presentUser();
	}

}])