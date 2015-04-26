app.controller('ScanViewCtrl', function($scope,  $stateParams, scan) {
  scan.get(parseInt($stateParams.scanId)).then(function(data) {
    $scope.scan = data;
  });
});
