hdio.config(function($stateProvider, $urlRouterProvider) {
 $urlRouterProvider.otherwise('/profile');

	$stateProvider
	.state('/login',{
		url: "/login",
		templateUrl : "/project-black/login/login.html",
		controller : 'login',
		
	})
	.state('/feed',{
		url: "/feed",
		templateUrl : "/project-black/user_feed/feed.html",
		controller: 'feed',
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
	.state('upload',{
		url: "/upload",
		templateUrl : "/project-black/user_upload/upload.html",
		controller: 'upl326SNG'

	})
	.state('/success',{
		url: "/success",
		templateUrl : "/project-black/user_upload/success.html",
		controller: 'upl326SNG'

	})

	.state('settings',{
		url: "/settings",
		templateUrl : "/project-black/user_settings/settings.html",
		controller: 'settings'

	})
	.state('settings.password',{
		url: "/password",
		templateUrl : "/project-black/user_settings/password.html",
		controller: 'settings'

	})
	.state('settings.edit',{
		url: "/edit",
		templateUrl : "/project-black/user_settings/edit.html",
		controller: 'settings'

	})

 //last edits made here
})