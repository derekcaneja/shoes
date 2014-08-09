shoeApp.controller('ShoeCtrl', ['$scope', 'shoeFactory', function($scope, shoeFactory){

    function init(){
        var colorThief = new ColorThief();

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
    };

    init();

}]);
