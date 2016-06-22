var hdio = angular.module('heardioApp', ['ui.router','firebase']);

hdio.run(function(){
	
	    if ('serviceWorker' in navigator) {
 console.log('Service Worker is supported');
 navigator.serviceWorker.register('js/sw.js').then(function(reg) {
   console.log(':^)', reg);
 
 }).catch(function(err) {
   console.log(':^(', err);
 });
}


});


hdio.constant('FirbaseUrl', "https://heardio.firebaseio.com/");
hdio.service('rootReference', ['FirbaseUrl', Firebase]);

hdio.controller('systemCenter', function($scope,$q,$rootScope,$firebaseArray){
	
	 //Providing list of genres in service 
    $rootScope.genres = ["Alternative Rock", "Hard Rock", "Club Dance", "Dubstep", "Electro House", "Techno", "Alternative Rap", "Hip-Hop", "Rap", "Pop", "R&B", "Instrumental", "Africa", "Caribbean", "South America", "Asia", "Indian"];
	$scope.msg = "Loading..."

	$rootScope.previousState;
$rootScope.currentState;
$rootScope.$on('$stateChangeSuccess', function(ev, to, toParams, from, fromParams) {
    $rootScope.previousState = from.name;
    $rootScope.currentState = to.name;
    console.log('Previous state:'+$rootScope.previousState)
    console.log('Current state:'+$rootScope.currentState)
});



})

