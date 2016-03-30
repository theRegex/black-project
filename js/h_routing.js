hdio.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('/feed',{
		url: "/feed",
		templateUrl : "/project-black/user_feed/feed.html"

	})
	.state('/browse',{
		url: "/browse",
		templateUrl : "/project-black/user_browse/browse.html"

	})
	.state('/genres',{
		url: "/genres",
		templateUrl : "/project-black/user_genres/genres.html"

	})
	.state('/inbox',{
		url: "/inbox",
		templateUrl : "/project-black/user_inbox/inbox.html"

	})
	.state('/latest',{
		url: "/latest",
		templateUrl : "/project-black/user_latest/latest.html"

	})
	.state('/profile',{
		url: "/profile",
		templateUrl : "/project-black/user_profile/profile.html"

	})


})