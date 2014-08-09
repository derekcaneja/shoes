shoeApp.controller('ShoeCtrl', ['$scope', 'shoeFactory', function($scope, shoeFactory){

    function init(){
        console.log('initing');

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
    };

    init();

}]);
