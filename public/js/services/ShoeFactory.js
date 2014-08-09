shoeApp.factory('shoeFactory', ['$http', function($http){
  var factory = {};

  factory.getShoes = function(category){
    // return $http.get()
    return ["dog","cat"]
  };

  // factory.getX = function(X){
  //   return $http.get()
  // };

  return factory;
}]);
