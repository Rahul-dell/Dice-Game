var address=["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"];
document.querySelector("html").addEventListener("keyup", randomDiceGenerator);
//for clicks speacially for screen touches
document.addEventListener("click", randomDiceGenerator );

// for keys specially for keyboards operated(domianantly)
function randomDiceGenerator(){
    var audio=new Audio("sounds/kick-bass.mp3");
audio.play();
var p1=Math.floor(Math.random()*6);
var p2=Math.floor(Math.random()*6);
if(p1>p2)
    {
        document.querySelector(".head").innerHTML=" <div><img class ='flag' src=' https://i.etsystatic.com/29076327/r/il/4770fb/3903551815/il_fullxfull.3903551815_2ms2.jpg' alt='flag image'/></div><div><h1 class ='big-title'>Player 1 wins!</h1></div>";
        document.querySelectorAll("img")[1].setAttribute("src", address[p1]);
        document.querySelectorAll("img")[2].setAttribute("src", address[p2]);
    }
    if(p1<p2)
    {
        document.querySelector(".head").innerHTML="<div><h1 class ='big-title'>Player 2 wins!</h1></div><div><img class ='flag' src=' https://i.etsystatic.com/29076327/r/il/4770fb/3903551815/il_fullxfull.3903551815_2ms2.jpg' alt='flag image'/></div>";
    
        document.querySelectorAll("img")[1].setAttribute("src", address[p1]);
        document.querySelectorAll("img")[2].setAttribute("src", address[p2]);}
    
    if(p1===p2)
    
    {
        document.querySelector(".head").innerHTML="<div><h1 class ='big-title'>Oops! Draw.</h1></div>";
        document.querySelectorAll("img")[0].setAttribute("src", address[p1]);
        document.querySelectorAll("img")[1].setAttribute("src", address[p2]);
    }

}
    





    //Better than this is above
//  if(p1>p2)
// {
//     document.querySelector("h1").textContent="Player 1 wins!";
// }
// if(p1<p2)
// {
//     document.querySelector("h1").textContent="Player 2 wins!";
// }

// if(p1===p2)

// {
//     document.querySelector("h1").textContent="Oops! Draw";
// }



