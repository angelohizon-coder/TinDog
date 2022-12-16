$(".iphone-img").hover(function() {
  $(".iphone-img").fadeToggle("slow", function() {
    $(".iphone-img").addClass("hover-image");
  });
});


$(".btn").click(function() {
  var audio = new Audio("sounds/Bark.mp3");
  audio.play();
});
