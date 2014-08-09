var webcam = (function(){

    var video = document.createElement('video');

    function play() {

        if (navigator.getUserMedia) {

            navigator.getUserMedia({video: {
                 mandatory: {
                    minWidth: $('.content-wrapper').width(),
                    minHeight: $('.content-wrapper').height()/2,
                    // maxWidth: $('.content-wrapper').width() + 100,
                    // maxHeight: ($('.content-wrapper').height()/2) + 100,
                    minFrameRate: 30
                }
            }, audio: false, toString : function() {return "video";} }, onSuccess, onError);

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

        console.log("ERROR WITH WEBCAM")

    }

    return {
        init: function() {

            video.height = $('.content').height()*2;
            video.width = $('.content').width()*2;
            video.videoWidth = video.width*2;
            video.videoHeight = video.height*2;
            //video.addClass('');
            $('#video-wrapper').append(video);

            navigator.getUserMedia || (navigator.getUserMedia = navigator.mozGetUserMedia || navigator.webkitGetUserMedia || navigator.msGetUserMedia);

            play();

        }()

    }


})();