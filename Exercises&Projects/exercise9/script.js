let a = prompt("Enter first Number:");
let b = prompt("Enter second Number:");
let op =prompt("Chose Operation: ");
let random=Math.random();
console.log(random)
let obj={
    "+":"-",
    "-":"+",
    "*":"/",
    "/":"**",
}

if(random > 0.1){
    alert(`The Result Is ${eval(`${a} ${op} ${b}`)}`)
}
else{
    op = obj(op);
    alert(`The Result Is ${eval(`${a} ${op} ${b}`)}`)
    
}
