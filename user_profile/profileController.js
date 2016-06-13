hdio.controller('profile', ['$scope','g_utility', function($scope,g_utility,storageControl){
	$scope.msg = "Your Profile";
	$scope.userInfoIn = null;
	$scope.userInfoOut = null;
	$scope.columns = [3,4,5];
	$scope.init = function(){
		
	

}
	


	$scope.objProvider = function(){
		 g_utility.getUserData("a159366d-54b1-4b92-832e-4e9443f377fc").$loaded().then(function(data) { 
      $scope.userInfoIn = data;
      //Console logging for testing only...
      //console.log( $scope.userInfoIn )
      $scope.init();
		})
	}();


 

 	$scope.loadMusicList = function(){

 		if($scope.userInfoIn.has_songs){

 			alert("user has songs!")
 		}else{

 				alert("user has no songs!")
 		}
 	}


 	$scope.bioCheck = function(){

 		if($scope.userInfoIn.bio == ""){
 			$scope.userInfoIn.bio = "Check settings to update your bio"
 		}
 	}






	

	
}])