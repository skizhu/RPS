document.getElementById("rockText").addEventListener("click", function win(){
    document.getElementById("pickText").append("Rock");
    document.getElementById("resultText").append("Loss");
    document.getElementById("botPickText").append("Paper");
});

document.getElementById("paperText").addEventListener("click", function win(){
    document.getElementById("pickText").append("Paper");
    document.getElementById("resultText").append("Loss");
    document.getElementById("botPickText").append("Scissors");
});

document.getElementById("scissorsText").addEventListener("click", function win(){
    document.getElementById("pickText").append("Scissors");
    document.getElementById("resultText").append("Loss");
    document.getElementById("botPickText").append("Rock");
});

function goAgain(){
    location.reload();
};