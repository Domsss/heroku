$(".menu-icon").click(function(){
  $(".menu").toggleClass("open-menu");
});

$(".menu li").click(function(){
  $(".sub-menu li").toggleClass("open-menu");
});
//$(".menu-icon").click(function(){
//  $(".menu").toggleClass("open-menu");
//});