hdio.service('g_utility',function($http,$q,$rootScope){
  
	//Must run on server to avoid Cross Origin Requests Security!!!!
	var g_utility = this;
	//Providing list of genres in service 
	g_utility.genres = ["Alternative Rock","Hard Rock","Club Dance","Dubstep","Electro House","Techno","Alternative Rap","Hip-Hop","Rap","Pop","R&B","Instrumental","Africa","Caribbean","South America","Asia","Indian"]
    //last edits made here
	g_utility.user = null;
	g_utility.getCurrentUser = function(){
	var defer = $q.defer();
	$http.get($rootScope.endPoint + "/user.json")
	.success(function(res){
	
		g_utility.user = res;
		var cResponse = JSON.stringify(res);
		console.log("success!" + cResponse)
	defer.resolve(res);

}).error(function(err,status){
	defer.reject(err)
	console.log("Error in getCurrentUser!::" + err +":"+ + res)
})

return defer.promise;

}

	return g_utility;
})