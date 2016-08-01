white.factory('Rex',['$http',function($http){
  return $http.get('http://127.0.0.1:8080/api/EPLTeams').success(function(data){
    console.log("Success");
    console.log(data);
    return data;
  })
  .error(function(err){
    console.log("Failed");
    return err;
  });
}]);
