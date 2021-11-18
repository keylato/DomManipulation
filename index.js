const blueButton= document.getElementById("blue_button");
const redButton= document.getElementById("red_button");
const greenButton= document.getElementById("green_button");

let coloredBox= document.getElementsByClassName("colored-box")[0];

//funcion anonima 
//function(){

//}
//funcion flecha anonima
//()-> {

//}

let colors=["blue","red","green",];

function resetColor(){
    for(let color of colors){
        coloredBox.classList.remove(color);
        
    }

}
function changeColorToBlue(){
    resetColor();
    coloredBox.classList.add('blue');
}

blueButton.addEventListener('click', changeColorToBlue);

function changeColorToRed(){
    resetColor();
    coloredBox.classList.add('red');
}

redButton.addEventListener('click', changeColorToRed);

function changeColorToGreen(){
    resetColor();
    coloredBox.classList.add('green');
}

greenButton.addEventListener('click', changeColorToGreen);
