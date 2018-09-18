function addToConsole(message) {
  $('.fconsole').append("<p>"+message+"</p><br>");
}

$(function(){
  // Bind the swipeHandler callback function to the swipe event on div.box
  $( ".fconsole" ).on( "swipe", swipeHandler );

  // Callback function references the event target and adds the 'swipe' class to it
  function swipeHandler( event ){
    addToConsole('swipping');
    $( event.target ).addClass( "swipe" );
  }
});
