


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
intrepidApp.controller('mainController', function($scope, $rootScope, $location) {
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

});

intrepidApp.controller('homeController', function($scope) {
  $scope.current = 'home';
  $scope.banner = true;
  $scope.quotes = quotes;
  $scope.carrousel = function(){
    jQuery('#ca-container').contentcarousel();
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


intrepidApp.controller('clientsController', function($scope) {
  $scope.current = 'service';
  $scope.banner = false;
  $scope.clients = clients;
});

intrepidApp.controller('whoController', function($scope) {
  $scope.current = 'who';
  $scope.banner = false;
});



