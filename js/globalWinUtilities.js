hdio.service('g_utility',function($http,$q,$rootScope,$firebaseArray,$firebaseObject){

  
	//Must run on server to avoid Cross Origin Requests Security!!!!
	var g_utility = this;
	g_utility.ref = new Firebase("https://heardio.firebaseio.com/");
	//Providing list of genres in service 
	g_utility.genres = ["Alternative Rock","Hard Rock","Club Dance","Dubstep","Electro House","Techno","Alternative Rap","Hip-Hop","Rap","Pop","R&B","Instrumental","Africa","Caribbean","South America","Asia","Indian"]
    //last edits made here
	g_utility.user = null;

	 g_utility.getUserData = function(id) {

        var data  = $firebaseObject(g_utility.ref.child('users').child(id));

        return data;

        }


     g_utility.getFollwers = function(id){



     }




     g_utility.getUserTracks = function(id){



     }


     g_utility.getFeedData = function(){



     }


     g_utility.getAppUsers = function(){




     }

	

})