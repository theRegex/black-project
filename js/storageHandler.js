hdio.service('storageControl', function(g_utility){
	var storageControl = this;
	storageControl.lastAppState = localStorage;
	storageControl.currentAppState = sessionStorage;

	storageControl.pushCurrentAppState = function(){

	}
	storageControl.getLastAppState = function(){

	}

})