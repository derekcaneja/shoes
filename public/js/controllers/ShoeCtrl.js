shoeApp.controller('ShoeCtrl', ['$scope', 'shoeFactory', function($scope, shoeFactory){

  function init(){
    console.log('initing');


    // USER FORM INPUT
    $scope.params = {};

    $scope.setGender = function(param) {
        $scope.params.gender = param;
    };

    $scope.setOccassion = function(param) {
        $scope.params.occassion = param;
    };

    $scope.setSeason = function(param) {
        $scope.params.season = param;
    };

    $scope.showColorChooser = function() {
        console.log($scope.params);
    };


    // USER SELECTION METHODS
    $scope.resultShoes = shoeFactory.getShoes("catalog",$scope.params);

    $scope.saveShoe = function(shoe){
      console.log('saved!')
      this.chosenShoes.push(shoe);
      console.log(this.chosenShoes);
      this.nextShoe();
    };

    $scope.nextShoe = function(){
      console.log('skipped shoe!');
      this.currentNum ++;
      var _this = this;
      if (this.currentNum == this.resultShoes.length){
        console.log('done choozing')
        _this.step(4);
      }
    };

    $scope.currentNum = 0;

    $scope.currentItem = function(){
      return this.resultShoes[this.currentNum];
    };

    $scope.chosenShoes = [];

    $scope.step = function(index){
      $scope.currentStep = index;
      console.log(index)
    }

    $scope.currentStep = 1;
  };

  init();

}]);
