var p1button = document.querySelector('#p1');
var p2button = document.querySelector('#p2');
var p1score = 0;
var p2score = 0;
var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");
var gameOver = false;
var winningScore = 5;
var resetButton = document.querySelector("#reset");
var input = document.querySelector("input[type = 'number']");
var p = document.querySelector("p");
var winningScoreDisplay = document.querySelector("p span");

function reset(){
    p1score = 0;
    p2score = 0;
    p1display.textContent = p1score;
    p2display.textContent = p2score;
    p1display.classList.remove("winner");
    p2display.classList.remove("winner");
    gameOver = false;
};

p1button.addEventListener("click", function(){
    if(!gameOver){
    p1score++;
    console.log(p1score, winningScore);
    if(p1score === winningScore){
        p1display.classList.add("winner");
        gameOver = true;
    }
    console.log(p1score);
    p1display.textContent = p1score;
    }
});
p2button.addEventListener("click", function(){
    if(!gameOver){
    p2score++;
    if(p2score === winningScore){
        p2display.classList.add("winner");
        gameOver = true;
    }
    console.log(p2score);
    p2display.textContent = p2score;
}
});
resetButton.addEventListener("click",function(){
    reset();
});

input.addEventListener("change",function(){
    winningScoreDisplay.textContent = this.value;
    winningScore = Number(this.value);
    reset();
});
