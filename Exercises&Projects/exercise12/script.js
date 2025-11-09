let x , y , z;
for(let i = 0; i < 5; i++){
 x = Math.floor(Math.random()*255);
 y = Math.floor(Math.random()*255);
 z = Math.floor(Math.random()*255);
document.querySelector(".container").children[i].style.backgroundColor = `rgb(${x},${y},${z})`;
}