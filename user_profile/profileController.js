hdio.controller('profile', ['$scope','g_utility', function($scope,g_utility,storageControl){
	$scope.msg = "Your Profile";
	$scope.userInfoIn = null;
	$scope.userIngoOut = null;

	$scope.init = function(){
			$scope.presentUser();
	}

	$scope.presentUser = function(){
		g_utility.getCurrentUser().
		then(function(res){
			//sucess
			$scope.userInfo = g_utility.user;
			
		}, function(e){
			//error
		})
	}


	$scope.init()
}])