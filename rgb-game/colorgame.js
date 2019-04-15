var numSquares =6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setUpModeButtons();
    setUpSquares();
    reset();
}

function setUpSquares(){
    for (i = 0; i < squares.length; i++){
        //  add click listeners to squares
        squares[i].addEventListener("click",function(){
        //    grab color of clicekd square
            var clickedColor = this.style.backgroundColor;
            console.log(pickedColor, clickedColor)
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                h1.style.backgroundColor = clickedColor;
                changeColors(clickedColor);
            }else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    
    }
}

function setUpModeButtons(){
    // mode button listeners
    for(var i  =0 ; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click",function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "EASY" ? numSquares = 3: numSquares =6;
            reset();
    
        })
    }
}


function reset(){
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
    // generate all new colors
    colors = generateRamdomColors(numSquares);
    // pick a new random color
    pickedColor = pickColor();
    // change colorDisplay to match picked Color
    colorDisplay.textContent = pickedColor;
    // change colors of squares
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];

        }else{
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "skyblue";
   
}


resetButton.addEventListener("click",function(){
    reset();
})




function changeColors(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    // pick random number
    var random = Math.floor(Math.random() * colors.length)  
    // return color
    return colors[random];
}

function generateRamdomColors(num){
    // make an array
    var arr = [];
    // add num random colors to arr
    for(var i = 0; i < num; i++){
        // get random color and push into arr
        arr.push(randomColor());
    }
    // rerurn that array
    return arr;
}
function randomColor(){
    // pick red from 0 - 255
    var r = Math.floor(Math.random() * 256)
    // pick green from 0 - 255
    var g = Math.floor(Math.random() * 256)
    // pick blue from 0 - 255
    var b = Math.floor(Math.random() * 256)
    return "rgb(" + r + ", " + g + ", " + b + ")";

}