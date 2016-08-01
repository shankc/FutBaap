white.factory('TRex',['$http',function($http){
  return $http.get('http://127.0.0.1:8080/api/GetPlayers').success(function(data){
    console.log("Success");
    return data;
  })
  .error(function(err){
    console.log("Failed");
    return err;
  });
}]);
