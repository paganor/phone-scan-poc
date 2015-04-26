app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('scan', {
      'url' : '/scan',
      'templateUrl' : 'views/scan.html',
      'controller' : 'ScanCtrl'
    })
    .state('scanView', {
      'url' : '/scan/:scanId',
      'templateUrl' : 'views/scanView.html',
      'controller' : 'ScanViewCtrl'
    });

    $urlRouterProvider.otherwise('/scan');
});
