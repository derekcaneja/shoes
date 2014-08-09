shoeApp.controller('ShoeCtrl', ['$scope', 'shoeFactory', function($scope, shoeFactory){

    function init(){
        var colorThief = new ColorThief();

        console.log('initing');

        // USER FORM INPUT
        $scope.params = {};

        $scope.setGender = function(param) {
            if      (param == 'mens')   $scope.params.gender = "Men\\'s";
            else if (param == 'womens') $scope.params.gender = "Women\\'s";
        };

        $scope.setOccassion = function(param) {
            $scope.params.type = param;
        };

        $scope.setPrice = function(param) {
            if(param == 1) {
                $scope.params.minprice = 1;
                $scope.params.maxprice = 70;
            } else if(param == 2) {
                $scope.params.minprice = 70;
                $scope.params.maxprice = 100;
            } else if (param == 3) {
                $scope.params.minprice = 100;
                $scope.params.maxprice = 1000;
            }
        };

        $scope.items = null;

        // USER SELECTION METHODS
        $scope.showColorChooser = function() {
            shoeFactory.getShoes('bygendertypeminpriceandmaxprice', $scope.params).success(function(data) {
                $scope.items = data;
            });
        };

        $scope.colors = [];

        $scope.getColor = function(section) {
            var video  = document.getElementsByTagName('video')[0];
            var canvas = document.createElement('canvas');

            canvas.width  = video.width;
            canvas.height = video.height;
            
            // get the canvas context for drawing
            var context = canvas.getContext('2d');
     
            // draw the video contents into the canvas x, y, width, height
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
     
            // get the image data from the canvas object
            var dataURL = canvas.toDataURL();

            console.log(dataURL);

            var image = new Image();
            image.src = dataURL;
     
            // set the source of the img tag
            var color = colorThief.getColor(image);

            $('.content-' + section).css('background-color', 'rgb(' + color.toString() + ')');

            $scope.colors.push(color);

            if      ($scope.colors.length == 1) video.style.top = $('.content-' + section).height();
            else if ($scope.colors.length == 2) console.log('done!');
        }

        $scope.filterColor = function() {
            
        }

        
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
            _this.selectionDone();
          }
        };

        $scope.currentNum = 0;

        $scope.currentItem = function(){
            return this.resultShoes[this.currentNum];
        };

        $scope.chosenShoes = [];

        $scope.selectionDone = function(){
          if (this.currentNum == this.resultShoes.length ){
            console.log('ahhh!!!')
            $scope.selectionDone = "done";
          }
        }
      };

      init();

}]);
