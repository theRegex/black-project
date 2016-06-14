


hdio.controller('heardUlOAD', ['$scope', function($scope){

  $scope.creds = {
  bucket: 'heardio/users',
  access_key: 'AKIAJYYJKA5H234325VQ', // REMOVED FOR PRIVACY CONCERNS
  secret_key: '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' // REMOVED FOR PRIVACY CONCERNS
}


$scope.progresses = null;

$scope.sgfilecheck = function(){

  if($scope.file.name.endsWith(".mp3") == false){
    toastr.error('Sorry, file type must be mp3');
    return false;
  }

  if($scope.file.size > 10585760) {
    toastr.error('Sorry file too large, size must be under 10MB');
    return false;

  }else{

    $scope.upload();

  }

}


$scope.upload = function() {
  // Configure The S3 Object 
    
  AWS.config.update({ accessKeyId: $scope.creds.access_key, secretAccessKey: $scope.creds.secret_key });
  AWS.config.region = 'us-east-1';


  var bucket = new AWS.S3({ params: { Bucket: $scope.creds.bucket } });
 

  if($scope.file) {
    var params = { Key: $scope.file.name, ContentType: $scope.file.type, Body: $scope.file, ServerSideEncryption: 'AES256' };
 
    bucket.putObject(params, function(err, data) {
      if(err) {
        // There Was An Error With Your S3 Config
        alert(err.message);
        return false;
      }
      else {
        // Success!
        //cfpLoadingBar.complete();
      alert('Successfully uploaded media')
      }
    })
    .on('httpUploadProgress',function(progress) {
          // Log Progress Information
          //cfpLoadingBar.start();
          $scope.progresses = Math.round(progress.loaded / progress.total * 100) + '% done';
        });
  }
  else {
    // No File Selected
    alert('No File Selected');
  }
}



  
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