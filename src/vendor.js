import $ from 'jquery';

$(document).ready(function() {
  let arr = [];

  // Add task to list
  $('.add').click(function() {
    arr.push(1);
    $(`<li>Task number ${arr.length}</li>`)
      .appendTo('ul')
      .hide()
      .fadeIn(400);
  });

  // Remove task from list
  $('.remove').click(function() {
    if (arr.length === 0) {
      $("<p>'NO TASKS TO REMOVE'</p>")
        .appendTo('.alert')
        .hide()
        .fadeIn(400);
      setTimeout(function() {
        $('.alert')
          .children()
          .fadeOut(400, function() {
            $(this).remove();
          });
      }, 2000);
    } else {
      arr.pop();
      $(`li`)
        .last()
        .fadeOut(400, function() {
          $(this).remove();
        });
    }
  });

  // Remove all tasks
  $('.clear').click(function() {
    if (arr.length === 0) {
      $("<p>'NO TASKS TO REMOVE'</p>")
        .appendTo('.alert')
        .hide()
        .fadeIn(400);
      setTimeout(function() {
        $('.alert')
          .children()
          .fadeOut(400, function() {
            $(this).remove();
          });
      }, 2000);
    } else {
      if (window.confirm('ARE YOU SURE YOU WANT TO REMOVE ALL TASKS?')) {
        arr = [];
        $(`ul`)
          .children()
          .fadeOut(400, function() {
            $(this).remove();
          });
      }
    }
  });
});
