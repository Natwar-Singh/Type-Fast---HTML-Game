var word,pre;
var requestStr = "http://randomword.setgetgo.com/get.php";
var count=0;
function RandomWordComplete(json){
  pre=word;
  word=json.Word;
  $("#cloud").html(word);
	   
}
$.fn.newWord= function() {
$.ajax({
  type: "GET",
  url: requestStr,
  dataType: "jsonp",
  jsonpCallback: 'RandomWordComplete',
            
  success:function()
    {
    var input=$("#input").val();
	  $("#input").val("");
	  if(input==pre)
			{count++;
			};
	  $("#score").html("score:"+count);
	  $("#cloud").css("left","-20%");
	  $("#cloud").animate({
      left: '105%'
      },14000);}
 	});
}
$(document).ready(function()
  {
  $(".tap_wrap").height($(window).height());
  setTimeout(function()
    { 
    $("#input").fadeIn();
    $("#countdown").fadeOut();
    $("#cloud").newWord();
    timer=60;
    var id=setInterval(function()
    {
    $("#cloud").newWord();
    },15000);

  var timer_id=setInterval(function()
    {
    timer=timer-1;
    jQuery("#timer").html("00:"+("0" +timer).slice(-2));
    },1000);

  setTimeout(function()
    { 
    jQuery("#timer").html("00:00");
    clearInterval(id);
    clearInterval(timer_id);
    count=0;
    $(".gameover").css("cursor","default");
    jQuery(".gameover").fadeIn();
    $("#input").fadeOut();
    }, 1000*60);},5000);

  setTimeout(function()  
    {
    $("#messagge").fadeOut();
    $("#countdown").fadeIn();
    },1000);

  setTimeout(function()
    {
    $("#countdown").fadeOut();
    $("#countdown").html("2");
    $("#countdown").fadeIn();
	},2000);
  setTimeout(function()
    {
    $("#countdown").fadeOut();
    $("#countdown").html("1");
    $("#countdown").fadeIn();
    },3000);
  setTimeout(function()
    {
    $("#countdown").fadeOut();
    $("#countdown").html("START");
    $("#countdown").fadeIn();
	},4000);
  jQuery("#restart").click(function()
  {
    location.reload();
  })       
})
