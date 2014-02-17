//Settings
var Settings =
  {
    Messaging: "http://dev.clickymedia.co.uk/ccfw-messaging.php"
  };
  
    //Contact Page events
  $('#page-message #message-send').bind('click', function(){
    
    var Email = $('#message-email').val();
   
   
    $.getJSON(Settings.Messaging + '?Callback=?', 
        {EmailAddress:EmailAddress}, 
      function(Response){
        if(typeof Response.Error != "undefined")
          alert(Response.Error);
        if(typeof Response.Message != "undefined")
        {
          alert(Response.Message);
          document.location.hash = "#page-contact";
        }
      });
  });
  