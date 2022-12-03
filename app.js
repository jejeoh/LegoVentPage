let menu = document.querySelector("header.menu");
let ico = document.querySelector("div.open");
ico.onclick = function(){
    menu.classList.toggle('act');
}
let card1 = document.querySelector("div.card:nth-child(1)");
card1.onclick = function(){
    card1.classList.toggle('go');
}
let card2 = document.querySelector("div.card:nth-child(2)");
card2.onclick = function(){
    card2.classList.toggle('go');
}
let card3 = document.querySelector("div.card:nth-child(3)");
card3.onclick = function(){
    card3.classList.toggle('go');
}
let card4 = document.querySelector("div.card:nth-child(4)");
card4.onclick = function(){
    card4.classList.toggle('go');
}

let select = document.querySelector("div.ima")
let prev = document.querySelector("div.btnn.one")
let suit = document.querySelector("div.btnn.two")

var adv = 1;
var value = 0;
suit.onclick = function(){
    if(adv < 5){
        adv = adv + 1;
        value = adv * 70 - 85;
        select.style.left = "-" + value + "%";
    }
}
prev.onclick = function(){
    if(adv > 1){
        adv = adv - 1;
        value = adv * 70 - 85;
        if(value < 0){
            value = value * (-1);
            select.style.left = value + "%";
        }else{
            select.style.left = "-" + value + "%";
        }
    }
}