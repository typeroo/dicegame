var random_Number;
random_Number=Math.floor(Math.random()*6)+1;
random_Number1=Math.floor(Math.random()*6)+1;

document.querySelector(".img1").src="./images/dice"+random_Number+".png";
document.querySelector(".img2").src="./images/dice"+random_Number1+".png";
if(random_Number<random_Number1){
    document.querySelector("h1").textContent="Player 2 wins!!";
} 
else if(random_Number==random_Number1){
    document.querySelector("h1").textContent="Its a tie!!";


}
else{
    document.querySelector("h1").textContent="Player 1 wins!!";
}