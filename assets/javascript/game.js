//Fighter classes in an object

var fighters = {
    coolman: {
        health: 120,
        attack: 8,
        counter: 15,
        img: "assets/images/hippie1.jpg",
        name: "Cool Man",
    },

    flower: {
        health: 180,
        attack: 7,
        counter: 25,
        img: "assets/images/hippie2.jpg",
        name: "Flower Children",
    },

    peace: {
        health: 100,
        attack: 14,
        counter: 5,
        img: "assets/images/hippie3.jpg",
        name: "Peace Train",
    },

    sweetbro: {
        health: 150,
        attack: 8,
        counter: 20,
        img: "assets/images/hippie4.jpg",
        name: "Sweet Bro",
    }
};

// Global variables and display heroes

var wins = 0;
var heroChosen = null;
var enemyChosen = null;
var objectKey = Object.keys(fighters);
for (var i = 0; i < objectKey.length; i++) {
    var fighterKey = objectKey[i];
    var fighter = fighters[fighterKey];
    var fighterDiv = "<div class='col-md-3 hero' data-name=" + fighterKey + "><p>" + fighter.name + "</p><img class='fighterImg' src=" + fighter.img + "><p class='life'>Life: " + fighter.health + "</p></div>";
    $(".champions").append(fighterDiv);
};
$("#instructions").html("<h3>Choose Your Soulmate!!</h3>");

// Choose hero and opponent
function choose() {
    $(".champions").on("click", ".hero", function() {
        var currentHero = $(this).attr("data-name");
        if (heroChosen === null) {
            heroChosen = fighters[currentHero];
            $("#selected").html(this);
            $("#instructions").html("<h3>Choose Your 'Friend'</h3>");
            $(".hero").addClass("bad");
        }
        else {
            enemyChosen = fighters[currentHero];
            $("#opponent").html(this);
            $("#attack").append("<button class='col-md-2 btn btn-default btn-lg vibe'>VIBE</button>");
            $("#instructions").html("<h3>Vibe your 'Friends' until you achieve Serenity</h3>");
            $(".champions").off("click");
        };

    });
};

// Click functions

$( document ).ready(function() {

    choose();

//  Attack

    $("#attack").on("click", function() {
        enemyChosen.health = enemyChosen.health - heroChosen.attack;
        heroChosen.health = heroChosen.health - enemyChosen.counter;
        $("#selected .life").html(heroChosen.health);
        $("#opponent .life").html(enemyChosen.health);
        $(".fight-words").html("You vibed " + enemyChosen.name + " for " + heroChosen.attack + ". " + enemyChosen.name + " sent bad vibes back for " + enemyChosen.counter + ".");
        heroChosen.attack = eval(heroChosen.attack * 2);

        if (heroChosen.health <= 0) {
            $(".fight-words").html("Bad vibes got the worst of you. Game Over.");
            $("#attack").off("click");
        }
        else if (enemyChosen.health <= 0) {
            wins++;
            enemyChosen = null;
            $("#opponent").empty();
            $("#attack").empty();
            if (wins === 3) {
                $("#instructions").html("<h3>Serenity Now!!!</h3>");
                $(".fight-words").empty();
            }
            else {
            $(".fight-words").html("Don't need 'em. Next!");
            choose();
            };
        };
    });

//Restart

    $(".restart").on("click", function() {
        location.reload();
    });

// Song

    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "assets/images/gettogether.mp3");

    $(".groove").on("click", function() {
    audioElement.play();
    });

    $(".pause").on("click", function() {
    audioElement.pause();
    });
});