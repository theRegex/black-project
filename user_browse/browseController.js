hdio.controller('h_browser', ['$scope','g_utility',function($scope,g_utility){
	$scope.catg = g_utility.genres;
	$scope.usInfo = g_utility.ref;
	$scope.msg = "Start Browsing Now";
	$scope.pData = function(){
		$scope.usInfo.push({name:"larry",type:"cowboy"});
	}
	$scope.init = function(){
		
	}

}])