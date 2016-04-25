$(document).ready(function() {
  //location button
  $('.button1').mouseenter(function() {
    $('.button1').fadeTo('fast', 1);
  });
  $('.button1').mouseleave(function() {
    $('.button1').fadeTo('fast', 0.5)
  });
  //fish species button
  $('.button2').mouseenter(function() {
    $('.button2').fadeTo('fast', 1);
  });
  $('.button2').mouseleave(function() {
    $('.button2').fadeTo('fast', 0.5)
  });
  //Other Button button
  $('.button3').mouseenter(function() {
    $('.button3').fadeTo('fast', 1);
  });
  $('.button3').mouseleave(function() {
    $('.button3').fadeTo('fast', 0.5)
  });
(function ($) {
      $('button').on('click', function () {
          $('.content ul').remove();
          // spinner to indicate something is occurring
          $('<i class="fa fa-refresh fa-spin"/>').appendTo('body');
          // grab location
          var location = $('select option:selected').text();
          // AJAx request
          $.getJSON('https://fq881pm326.execute-api.us-west-2.amazonaws.com/prod/locations', function (data) {

              var items = [],
                  $ul;

              $.each(data, function (key, val) {
                  //build list
                  items.push('<li id="' + key + '"><span class="name">' + val.entityname + '</span></li>');
              });

              if (items.length < 1) {
                  items.push('<li>No results for this location, try again!</li>');
              }

              // remove spinner
              $('.fa-spin').remove();

              // append list to page
              $ul = $('<ul />').appendTo('.content');

              //append list items to list
              $ul.append(items);
          });
      });
  }(jQuery));
});

/*var xhr = new XMLHttpRequest();
xhr.open("GET", "https://fq881pm326.execute-api.us-west-2.amazonaws.com/prod/locations", false);
xhr.send();

console.log(xhr.status);
console.log(xhr.statusText);*/
