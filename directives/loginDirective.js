hdio.directive('loginForm', function(g_utility,storageControl){
	// Runs during compile
	return {
		   scope: {},
		   restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		   require: "^?login",
		   templateUrl: '/project-black/login/loginDirHtml.html',
		   replace: true,
		   transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {
			console.log("login directive working!...")
		}
	};
});