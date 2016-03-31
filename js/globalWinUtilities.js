hdio.service('g_utility',function($scope,$http){
			var deferred = $q.defer();
	var lastAppState = localStorage;
    var sessionBackPack = sessionStorage;
   //last edits made here
	$scope.user = {
		  id: 0,
		  username: "",
		  fullname: "",
		  default_profile: false,
		  default_profile_img: true,
		  created_at: "",
		  geo: "",
		  time_zone: "",
		  bio: "",
		  rank: 0,
		  songs: 0,
		  posts: [
		  {
		  	time: "" , 
		  	stated: "",

		   }
		  ],
		  has_playlist: true,
		  following: 0,
		  followers_count: 0,
		  favourites_count: 0,
		  friends: [
		    {
		      names: {}
		    }
		  ],
  	      profilephotoUrl: ""
  }


	
})