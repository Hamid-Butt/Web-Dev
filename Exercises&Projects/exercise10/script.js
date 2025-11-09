let a, b, c;
let random1 = Math.floor(Math.random() * (3 - 1 + 1) + 1); // Gives Int in Range Of [1,4) But Math.floor() Gives 1,2,3
let random2 = Math.floor(Math.random() * (3 - 1 + 1) + 1);
let random3 = Math.floor(Math.random() * (3 - 1 + 1) + 1);

function random_2() {
    if (random2 == 1) {
        b = "Engine ";
        random_3();
    }
    else if (random2 == 2) {
        b = "Foods ";
        random_3();
    }
    else {
        b = "Garments ";
        random_3();
    }
}
function random_3() {
    if (random3 == 1) {
        c = "Bros ";
    }
    else if (random3 == 2) {
        c = "Limited ";
    }
    else {
        c = "Hub ";
    }
}

if (random1 == 1) {
    a = "Crazy ";
    random_2();
}
else if (random1 == 2) {
    a = "Amazing ";
    random_2();
}
else {
    a = "Fire ";
    random_2();
}

console.log(a.concat(b, c));