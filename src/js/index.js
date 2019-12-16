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
  
  /*$('#MenuIcon').click(function() {
    $('#MainMenu').css('left', '0px');
    function showMenu() {
      $('#MainMenu').css('left', '0px');
      $('#MenuIcon').animate({ right: '-100' }, 300);
    }
    setTimeout(showMenu, 100);
  });



  $('#close').click(function() {
    function hideMenu() {
      $('#MainMenu').css('left', '-800px');
      $('#MenuIcon').animate({ right: '50' }, 300);
    }
    setTimeout(hideMenu, 100);
  });*/
});

// Your jQuery code
