shoeApp.controller('ShoeCtrl', ['$scope', 'shoeFactory', function($scope, shoeFactory){

  function init(){
    console.log('initing');

    $scope.shoes = shoeFactory.getShoes('womens')
  // console.log(shoeFactory.getShoes('womens'));
  //   // shoeFactory.getShoes('womens')
    // .success( function(data){
    //   $scope.shoes = data;
    // })
    // .error( function(data){
    //   console.log(data);
    // });
  };

  init();

}]);
