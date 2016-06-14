hdio.service('g_utility', function($http, $q, $rootScope,rootReference, $firebaseArray, $firebaseObject) {


    //Must run on server to avoid Cross Origin Requests Security!!!!
    var g_utility = this;
    g_utility.ref = rootReference;
   
        //last edits made here
    g_utility.user = null;

    g_utility.getUserData = function(id) {

        var data = $firebaseObject(g_utility.ref.child('users').child(id));

        //Example of storing unique id on every piece of data stored in database;

        //var msgRef =  g_utility.ref.child('heard_msgservice').child("descriptions").push(); <-- call .push() to create a key
        // msgRef.set({message : "Hello World" , id : msgRef.key()}); <-- call set to store data on the key .
        //console.log(msgRef.key());
        g_utility.user = data;
        return data;

    }


    g_utility.getFollwers = function(id) {



    }

    //Takes in user id and song object
    g_utility.addTrack = function(id, sng) {
        //Will store an object containing song details ,ref to amazon storage , id key reference , and user id 
        var data = $firebaseObject(g_utility.ref.child('tracks').child(id));
        var trackRef = g_utility.ref.child('tracks').child(id).push(); //Creates key for song
        trackRef.set(sng);
    }



    g_utility.getUserTracks = function(id) {
        if (g_utility.user.has_songs) {
            var data = $firebaseObject(g_utility.ref.child('tracks').child(id));

        }
        return data;

    }

    g_utility.getConversations = function(id) {

        var data = $firebaseObject(g_utility.ref.child('messages').child(id));
        return data;

    }

    g_utility.sendMessage = function(id) {



    }

    g_utility.getFeedData = function() {



    }


    g_utility.getAppUsers = function() {




    }



})
