'use strict';

var shoeApp = angular.module('shoeApp', ['angular-gestures']);

$(document).ready( function(){
  console.log('loaded bro')

  $('#video-wrapper').css({
    'top': ($('.content-top').height() + $('.content-bottom').height()) * -1,
    'visibility': 'visible'
  });

});
