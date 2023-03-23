var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern=[];
var userClickedPattern=[];
var a=0;
var started = false;
$("document").keydown(function(){
    if(!started){
        $("#level-title").text("Level "+a);
        nextSequence();
        started = true;
    }
});

$(".btn").click(function(){
    var userChosenColour =  $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
});

function nextSequence(){
    a++;
    $("#level-title").text("Level "+a);
    
    var ran_no = Math.floor(Math.random()*4);
    var randomChosenColour= buttonColours[ran_no];
    gamePattern.push(randomChosenColour);
    
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

function playSound(name){
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play(); 
}

function animatePress(currentColor){
  $("#"+currentColor).addClass("pressed");

  setTimeout(function(){
    $("#"+currentColor).removeClass("pressed");
}, 100);
}
