hdio.config(function($stateProvider, $urlRouterProvider) {
	 $urlRouterProvider.otherwise('/login');
	$stateProvider
	.state('/login',{
		url: "/login",
		templateUrl : "/project-black/login/login.html",
		controller : 'login'

	})
	.state('/feed',{
		url: "/feed",
		templateUrl : "/project-black/user_feed/feed.html",
		controller: 'feed'

	})
	.state('/browse',{
		url: "/browse",
		templateUrl : "/project-black/user_browse/browse.html",
		controller: 'h_browser'

	})
	.state('/genres',{
		url: "/genres",
		templateUrl : "/project-black/user_genres/genres.html",
		controller: 'genre'

	})
	.state('/inbox',{
		url: "/inbox",
		templateUrl : "/project-black/user_inbox/inbox.html",
		controller: 'inbox'

	})
	.state('/latest',{
		url: "/latest",
		templateUrl : "/project-black/user_latest/latest.html",
		controller: 'latest'

	})
	.state('/profile',{
		url: "/profile",
		templateUrl : "/project-black/user_profile/profile.html",
		controller: 'profile'

	})

 //last edits made here
})