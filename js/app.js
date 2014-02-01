


// create the module and name it scotchApp
var intrepidApp = angular.module('intrepidApp', ['ngRoute','ngSanitize']);



  // configure our routes
intrepidApp.config(function($routeProvider, $locationProvider) {
  $routeProvider

  // route for the home page
  .when('/', {
    templateUrl : 'pages/home.html',
    controller  : 'homeController'
  })

  // route for the about page
  .when('/service-areas', {
    templateUrl : 'pages/services.html',
    controller  : 'serviceController'
  })

  // route for the contact page
  .when('/who-we-are', {
    templateUrl : 'pages/whoweare.html',
    controller  : 'whoController'
  })

  .when('/clients', {
    templateUrl : 'pages/clients.html',
    controller  : 'clientsController'
  })

  .otherwise({redirectTo: '/'});
});


// create the controller and inject Angular's $scope
intrepidApp.controller('mainController', function($scope, $rootScope, $location, $sce) {
  $scope.showBanner = function(){
    $scope.current = $location.path();
    $scope.banner = false;
    if( $location.path() === '/'){
      $scope.current = 'home';
      $scope.banner = 'true';
    }
    return;
  };

  $scope.$on("$routeChangeSuccess", function (event, next, current) {
    $scope.showBanner();
  });
  $scope.trust = function(str){
    return $sce.trustAsHtml(str);
  };

});

intrepidApp.controller('homeController', function($scope) {
  $scope.current = 'home';
  $scope.banner = true;
  $scope.quotes = quotes;
  $scope.carrousel = function(){
    var int;
    // every 3s
    jQuery('#ca-container').contentcarousel();
    //int = setInterval("jQuery('.ca-nav-next').trigger('click');",3000);
    jQuery('.ca-wrapper').hover(function(){
        //clearInterval(int);
    },function(){
        //int = setInterval("jQuery('.ca-nav-next').trigger('click');",3000);
    });
  };
});

intrepidApp.directive('repeatDone', function() {
  return function(scope, element, attrs) {
    if (scope.$last) { // all are rendered
      scope.$eval(attrs.repeatDone);
    }
  }
});

intrepidApp.controller('serviceController', function($scope) {
  $scope.current = 'service';
  $scope.banner = false;
  $scope.services = services;
});


intrepidApp.controller('clientsController', function($scope, $sce) {
  $scope.current = 'service';
  $scope.banner = false;
  $scope.clients = clients;
});

intrepidApp.controller('whoController', function($scope) {
  $scope.current = 'who';
  $scope.banner = false;
});



