shoeApp.factory('shoeFactory', ['$http', function($http){
  	var factory = {};

  	factory.getShoes = function(dataSet, params){
  		params.dataSet = dataSet;

    	return $http.post('/api', params);
  	};

  	return factory;
}]);
