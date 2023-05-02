//alert("working!");
// for(var i=0;i<20;i++){
//     randomNumber1= Math.floor(6*Math.random()) +1;
//     console.log(randomNumber1);
// }
randomNumber1= Math.floor(6*Math.random());
//console.log(randomNumber1);
randomNumber2= Math.floor(6*Math.random());
//console.log(randomNumber2);
var photo_list=["images\\dice1.png","images\\dice2.png","images\\dice3.png","images\\dice4.png","images\\dice5.png","images\\dice6.png"]
document.querySelector(".img1").setAttribute("src",photo_list[randomNumber1]);
document.querySelector(".img2").setAttribute("src",photo_list[randomNumber2]);

if(randomNumber1>randomNumber2)
    document.querySelector("h1").innerHTML= "🚩Player 1 wins";
else if(randomNumber1<randomNumber2)
    document.querySelector("h1").innerHTML= "Player 2 wins🚩";
else document.querySelector("h1").innerHTML= "Draw!";

function reset(){
    document.querySelector("h1").innerHTML= "Refresh Me";
    document.querySelector(".img1").setAttribute("src",photo_list[5]);
    document.querySelector(".img2").setAttribute("src",photo_list[5]);
}