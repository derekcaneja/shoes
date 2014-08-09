shoeApp.controller('ShoeCtrl', ['$scope', 'shoeFactory', function($scope, shoeFactory){

  function init(){
    console.log('initing');

    $scope.resultShoes = shoeFactory.getShoes('womens');

    $scope.saveShoe = function(shoe){
      console.log('saved!')
      this.chosenShoes.push(shoe);
      console.log(this.chosenShoes);
      this.nextShoe();
    };

    $scope.nextShoe = function(e){
      console.log('skipped shoe!');
      this.currentNum ++;
      if ($scope.currentNum == $scope.resultShoes.length ){
        console.log('done')
      }
    };

    $scope.currentNum = 0;

    $scope.currentItem = function(){
        return $scope.resultShoes[$scope.currentNum];
    };

    $scope.chosenShoes = [];

  };

  init();

}]);
