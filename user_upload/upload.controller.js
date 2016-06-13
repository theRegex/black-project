hdio.controller('upl326SNG', ['$scope','$state', function($scope,$state){
	//CONTROLLER FOR UPLOADING SONG 'UPL326SNG'
	//first check user by uid
	//check if user has bucket if not then create bucket
	$scope.userbucket = 'heardio/users';
  //Amazon s3 access keys
	$scope.access_key = 'AKIAJYYJKA5H234325VQ';
	$scope.secret_key = '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';

  //Upload Limits
	$scope.maxPicLimit = 2585760; //2MB
	$scope.maxSongLimit = 10585760; //10MB
	$scope.loadProgress = null;

	$scope.initiateUpl = function(){
		AWS.config.update({ accessKeyId: $scope.access_key, secretAccessKey: $scope.secret_key });
  		AWS.config.region = 'us-east-1';
  	    var bucket = new AWS.S3({ params: { Bucket: $scope.userbucket } });
  	     if ($scope.file) {
 	         var params = { Key: $scope.file.name, ContentType: $scope.file.type, Body: $scope.file, ServerSideEncryption: 'AES256' };

 	         bucket.putObject(params, function(err, data) {
 	                 if (err) {
 	                     // There Was An Error With Your S3 Config
 	                     alert(err.message);
 	                     return false;
 	                 } else {
 	                     // Success!
 	                
 	                     alert('Successfully uploaded track');
 	                 }
 	             })
 	             .on('httpUploadProgress', function(progress) {
 	                 // Log Progress Information
 	                
 	                 $scope.loadProgress = Math.round(progress.loaded / progress.total * 100) + '% done';
 	             });
 	     } else {
 	         // No File Selected
 	         alert('No File Selected');
 	     }

	}


  angular.element('.button').click(function(){

      $state.go('/success')

  })

}])


hdio.directive('file', function() {
  return {
    restrict: 'AE',
    scope: {
      file: '@'
    },
    link: function(scope, el, attrs){
      el.bind('change', function(event){
        var files = event.target.files;
        var file = files[0];
        scope.file = file;
        scope.$parent.file = file;
        scope.$apply();
      });
    }
  };
});