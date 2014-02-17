document.addEventListener("deviceready", function(){
   //PhoneGap is ready
}, false);

$(function(){
  //Navigate to the first page
  if(document.location.hash.length < 1)
   document.location.hash = $('div.page:first').attr('id');
     
  //Scrolling
  $('.scroller .up').bind('touchend', function(){
    Scrollable = $(this).parent().parent().children('.text').children('.scrollable');
    if(Scrollable.hasClass('nativeScroll'))
    {
      var ScrollTop = $(Scrollable).scrollTop() - 40;
      $(Scrollable).scrollTop(ScrollTop);
      return;
    }
    
    var New = parseInt($(Scrollable).css('margin-top')) + 40;

    if(New >= 40)
      return;

    $(Scrollable).css('margin-top', New + 'px');
  });
  
  $('.scroller .down').bind('touchend', function(){
    Scrollable = $(this).parent().parent().children('.text').children('.scrollable');
    if(Scrollable.hasClass('nativeScroll'))
    {
      var ScrollTop = $(Scrollable).scrollTop() + 40;
      $(Scrollable).scrollTop(ScrollTop);
      return;
    }
    
    var Available = 40 - $(Scrollable).parent().height();
    var New = parseInt($(Scrollable).css('margin-top')) - 40;

    if(New < Available)
      return;

    $(Scrollable).css('margin-top', New + 'px');
  });
  
  //iOS 5 Scrolling
  if(navigator.userAgent.match(/OS 5(.*) like Mac OS X/i)) 
    $('.text .scrollable').addClass('nativeScroll');
    
  //Android Scrolling
  if(navigator.userAgent.match(/Android/i))
    $('.text .scrollable').addClass('nativeScroll');
  
  //Contact Page events
  $('#page-message #message-send').bind('click', function(){
    var FirstName = $('#message-firstname').val();
    var LastName = $('#message-lastname').val();
    var Email = $('#message-email').val();
    var Phone = $('#message-telephone').val();
    var Message = $('#message-message').val();
    var Welsh = $('body').hasClass('Welsh') ? 'true' : 'false';
    
    $.getJSON(Settings.Messaging + '?Callback=?', 
        {EmailAddress:EmailAddress, LastName:LastName, Email:Email, Phone:Phone, Message:Message, Welsh:Welsh}, 
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
  
  
  if(navigator.userAgent.match(/Android/i))
    $('div#page-code .menu a').css('font-size', '13px');

  //BlackBerry is a horrible device
  if(navigator.userAgent.match(/BlackBerry/i))
  {
    
    $('.circle').each(function(){
      if(parseInt($(this).css('bottom')) == 0)
        $(this).css('position', 'fixed');
    });
    $('.footer, .sponsor, .contact, .viewcode, .return').css('position', 'fixed');
  }
});
