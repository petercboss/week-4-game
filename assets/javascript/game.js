var audioElement = document.createElement("audio");
audioElement.setAttribute("src", "assets/images/gettogether.mp3");

$(".groove").on("click", function() {
  audioElement.play();
});

$(".pause").on("click", function() {
  audioElement.pause();
});