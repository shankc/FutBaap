white.controller('green',['$scope','$routeParams','TRex',function($scope,$routeParams,TRex){
//$scope.Position=0;
$scope.wholesquad=null;

function check(name,array){
for(i=0;i<array.length;i++)
{
  if(array[i].TeamName===name)
  {
    console.log(array[i].TeamName);
    $scope.wholesquad=array[i];
    break;
  }
}
};
var teamname = $routeParams.TeamName;
console.log(teamname);
  TRex.success(function(data){
     check(teamname,data);
  });



}]);
