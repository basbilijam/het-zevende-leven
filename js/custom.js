$(document).ready(function(){

  // no automatic zoom-in when scrolling over the GoogleMaps iframe
  $('.map-container').click(function () {
    $('.map-container iframe').css("pointer-events", "auto");
    });

  $( ".map-container" ).mouseleave(function() {
    $('.map-container iframe').css("pointer-events", "none");
  });


});
