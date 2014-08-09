var webcam = (function(){

    var video = document.createElement('video');

    function play() {

        if (navigator.getUserMedia) {

            navigator.getUserMedia({ video: true, audio: false, toString : function() {return "video";} }, onSuccess, onError);

        } else {

            changeStatus('getUserMedia is not supported in this browser.', true);
        }

    }

    function onSuccess(stream) {

        var source;
 
        if (window.webkitURL) {

            source = window.webkitURL.createObjectURL(stream);

        } else {

            source = stream; // Opera and Firefox
        }
 

        video.autoplay = true;

        video.src = source;


    }

    function onError() {

        console.log("ERROR WITH WEBCAM", arguments)

    }

    return {
        init: function() {

            video.height      = $('.content-top').height();
            video.width       = $('.content-top').width();
            video.videoWidth  = video.width;
            video.videoHeight = video.height;
            //video.addClass('');
            $('.content-wrapper').append(video);

            navigator.getUserMedia || (navigator.getUserMedia = navigator.mozGetUserMedia || navigator.webkitGetUserMedia || navigator.msGetUserMedia);

            play();

        }()

    }


})();