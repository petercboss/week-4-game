//Fighter classes in an object
var fighters = {
    coolman: {
        health: 0,
        attack: 0,
        counter: 0,
        img: "assets/images/hippie1.jpg",
    },

    flower: {
        health: 0,
        attack: 0,
        counter: 0,
        img: "assets/images/hippie2.jpg",
    },

    peace: {
        health: 0,
        attack: 0,
        counter: 0,
        img: "assets/images/hippie3.jpg",
    },

    sweetbro: {
        health: 0,
        attack: 0,
        counter: 0,
        img: "assets/images/hippie4.jpg",
    }
};

//Display pictures from the classes

$(".coolman").html("<img src=" + fighters.coolman.img + "> + <p>Cool Man</p><p>Health: " + fighters.coolman.health + "</p>");
$(".flower").html("<img src=" + fighters.flower.img + "> + <p>Flower Children</p><p>Health: " + fighters.flower.health + "</p>");
$(".peace").html("<img src=" + fighters.peace.img + "> + <p>Peace Train</p><p>Health: " + fighters.peace.health + "</p>");
$(".sweetbro").html("<img src=" + fighters.sweetbro.img + "> + <p>Sweet Bro</p><p>Health: " + fighters.sweetbro.health + "</p>");





















//Song
var audioElement = document.createElement("audio");
audioElement.setAttribute("src", "assets/images/gettogether.mp3");

$(".groove").on("click", function() {
  audioElement.play();
});

$(".pause").on("click", function() {
  audioElement.pause();
});