var colorThief = new ColorThief();

shoeApp.controller('ShoeCtrl', ['$scope', 'shoeFactory', function($scope, shoeFactory){


  function init(){
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

        console.log(color)

        $('.content-' + section).css('background-color', 'rgb(' + color.toString() + ')');

        $scope.colors.push(color);

        var _this = this;
        if ($scope.colors.length == 1) $('#video-wrapper').css('top', $('.content-bottom').height() * -1 - 10);
        else if ($scope.colors.length == 2) {
                _this.step(3);
        }
    }

    $scope.filterColor = function() {

    }

    // USER SELECTION METHODS

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
      if (this.currentNum == this.finalItems.length){
        console.log('done choozing')
        _this.step(4);
      }
    };

    $scope.currentNum = 0;

        $scope.currentItem = function(){
            return this.finalItems[this.currentNum];
        };

        $scope.chosenShoes = [];

        $scope.currentStep = 1;

        $scope.finalItems = [];

        $scope.step = function(index){
            if($scope.currentStep == 1) {
                shoeFactory.getShoes('bygendertypeminpriceandmaxprice', $scope.params).success(function(data) {
                    $scope.items = data;
                });

                $('#video-wrapper').css('top', 0);
                $('#video-wrapper').css('visibility', true);
            } else if($scope.currentStep == 2) {
                var colors = {
                    'black' : [50, 50, 50],
                    'brown' : [89, 74, 70],
                    'tan'   : [172, 151, 125],
                    'white' : [240, 240, 240],
                    'silver': [130, 130, 130]
                };

                var distances = {};

                for(var col in colors) {
                    var r = Math.pow(colors[col][0] * $scope.colors[0][0], 2);
                    var g = Math.pow(colors[col][1] * $scope.colors[0][1], 2);
                    var b = Math.pow(colors[col][2] * $scope.colors[0][2], 2);

                    distances[col] = Math.sqrt(r + g + b);
                }

                var closestColor = 'black';

                for(var col in distances) {
                    if(distances[col] < distances[closestColor]) closestColor = col;
                }

                for(var i = 0; i < $scope.items.length; i++) {                    
                    var color = $scope.items[i].color;

                    if(color.indexOf('black')   > -1) color = 'black';
                    if(color.indexOf('brown')   > -1) color = 'brown';
                    if(color.indexOf('tan')     > -1) color = 'tan';
                    if(color.indexOf('white')   > -1) color = 'white';
                    if(color.indexOf('silver')  > -1) color = 'silver';

                    if(closestColor == color) {
                        $scope.finalItems.push($scope.items[i]);
                    }
                }
            } 
            
            $scope.currentStep = index;
        }
    };

    init();
}]);