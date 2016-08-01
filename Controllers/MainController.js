white.controller('black',['$scope','Rex',function($scope,Rex){
//$scope.Position=0;
  Rex.success(function(data){
    console.log(data);
    $scope.TheTeamData=data;
  });

}]);
