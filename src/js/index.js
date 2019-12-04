import 'bootstrap';
import './parallax.js';
import './app.js';
import '../scss/index.scss';

$(document).ready(function() {
  $('#MenuIcon').click(function() {
    $('#MainMenu').css('left', '0px');
    function showMenu() {
      $('#MainMenu').css('left', '0px');
      $('#MenuIcon').animate({ right: '-100' }, 300);
    }
    setTimeout(showMenu, 100);
  });

  $('#close').click(function() {
    function hideMenu() {
      $('#MainMenu').css('left', '-300px');
      $('#MenuIcon').animate({ right: '50' }, 300);
    }
    setTimeout(hideMenu, 100);
  });
});

// Your jQuery code
