
var buttonColours = ["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;


$(document).keypress(function() {
    if (!started) {

        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            },1000);

        }
    }
    else{
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }

}


function nextSequence(){
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);


    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);//to animate a flash.
    playSound(randomChosenColour);
}


function playSound(name){
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}

function animatePress(currentColor){
    $("#" + currentColor).addClass("pressed");
    setTimeout(function(){
        $("#" + currentColor).removeClass("pressed");
    },100);
}

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;

}










//1. Inside game.js create a new function called nextSequence()
//2. Inside the new function generate a new random number between 0 and 3, and store it in a variable called randomNumber
//3. At the top of the game.js file, create a new array called buttonColours and set it to hold the sequence "red", "blue", "green", "yellow" .
//4. Create a new variable called randomChosenColour and use the randomNumber from step 2 to select a random colour from the buttonColours array.
//5. At the top of the game.js file, create a new empty array called gamePattern.
//6. Add the new randomChosenColour generated in step 4 to the end of the gamePattern.
//7. Use jQuery to select the button with the same id as the randomChosenColour
//8. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.
//9. Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
//10. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
//11. Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern
//12. In the same way we played sound in nextSequence() , when a user clicks on a button, the corresponding sound should be played.
//13. Create a new function called playSound() that takes a single input parameter called name.
//14. Take the code we used to play sound in the nextSequence() function and add it to playSound().
//15. Refactor the code in playSound() so that it will work for both playing sound in nextSequence() and when the user clicks a button.
//16. Create a new function called animatePress(), it should take a single input parameter called currentColour.
//17. Use jQuery to add this pressed class to the button that gets clicked inside animatePress().
//18. use jquery to detect when a keyboard key has been pressed and call nextSequence().
//19. create a bew varuavke called level and start at level 0.
//20. start with h1 title.
//21. increase the level in nextSequence().
//22. creat a new function called checkAnswer() it should take input currentLevel.
//23. call checkAnser in .click function.
//24. write an if statement inside checkAnswer() to check if most recent user answer is same as the game pattern.
//25. If the user got the most recent answer right in step 24, then check that they have finished their sequence with another if statement.
//26. Call nextSequence() after a 1000 millisecond delay.
//27. once nextSequence() is triggered , reset the userClickedPattern to an empty array.
