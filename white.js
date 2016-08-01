var white = angular.module('MineApp',['ngRoute']);
white.config(function($routeProvider){
$routeProvider.when('/',{
  controller:'black',
  templateUrl:'views/TeamData.html'
})
.when('/ViewPlayers/:TeamName',{
  controller:'green',
  templateUrl:'views/SquadData.html'

})
.otherwise({redirectTo: '/'}); 

});
white.config(['$httpProvider', function ($httpProvider) {

               $httpProvider.defaults.useXDomain = true;
        //$httpProvider.defaults.withCredentials = true;
        delete $httpProvider.defaults.headers.common["X-Requested-With"];
        $httpProvider.defaults.headers.common["Accept"] = "application/json";
        $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
        }]);
