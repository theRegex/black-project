hdio.service('g_utility',function($http,$q,$rootScope){
		
//Must run on server to avoid Cross Origin Requests Security!!!!
	var g_utility = this;

	var lastAppState = localStorage;
    var sessionBackPack = sessionStorage;
   //last edits made here
	g_utility.user = [];

g_utility.getCurrentUser = function(){
var defer = $q.defer();
$http.get($rootScope.endPoint + "/user.json")
.success(function(res){
	
		g_utility.user.push(res)
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