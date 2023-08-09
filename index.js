let myDiv = document.getElementById("myDiv");
let colors = ["red", "green", "blue", "yellow", "purple"]; // Array of colors

function changeColor() {
    let randomColor = colors[Math.floor(Math.random() * colors.length)]; // Pick a random color from the array
    myDiv.style.backgroundColor = randomColor; // Set the background color
}

// Change color on mouse click event
myDiv.addEventListener("click", function() {
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    myDiv.style.backgroundColor = randomColor;
});






// function clickbox(){
//     let containerBox=document.getElementById("containerBox").style.background="green"
  
//  }