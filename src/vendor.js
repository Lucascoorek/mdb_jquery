// import 'jquery';
import $ from 'jquery';

$(document).ready(function() {
  $('h1').on('click', function() {
    $(this).toggleClass('red');
  });
});
