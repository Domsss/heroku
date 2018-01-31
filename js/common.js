$(".accordion li ul").hide();
$("button").click(function(){
  var index = $("button").index(this);
  $(".accordionChild"+index).slideToggle();
});