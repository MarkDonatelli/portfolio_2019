import 'bootstrap';
import './parallax.js';
import './app.js';
import './mouse-follow.js';
import '../scss/index.scss';
import './particles.js';

$(document).ready(function() {

  //particles init
  particlesJS.load('particles-js', 'particles.json', function(){
    console.log('particles.json loaded...');
  });

  var menu = $('.main-menu');

  if($(menu).is(':visible')){
    console.log('here');
  }
  

});

// Your jQuery code
