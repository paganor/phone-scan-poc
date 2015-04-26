app.controller('BarcodeCtrl', function($scope,
                                       $ionicPlatform,
                                       $cordovaToast,
                                       $cordovaBarcodeScanner,
                                       scan) {
  $scope.log = function() {
    $ionicPlatform.ready(function() {
      $cordovaToast
        .showLongCenter('heyyyy..')
        .then(function(success) {
          console.log('was success');
        }, function(error) {
          console.log('was error');
        });
    });
  };

  $scope.launchScanner = function() {
    $ionicPlatform.ready(function() {
      $cordovaBarcodeScanner
        .scan()
        .then(function(barcodeData) {
          $cordovaToast
            .showLongCenter(barcodeData)
            .then(function(success) {
            });
        }, function(error) {
          // An error occurred
        });
    });
  };
});
