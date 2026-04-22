meow = document.getElementById('meow');
woof = document.getElementById('woof');
tweet = document.getElementById('tweet');
moo = document.getElementById('moo');
baa = document.getElementById('baa');

const meowsound = new Audio("audio\\dragon-studio-cat-meow-401729.mp3");
const woofsound = new Audio("audio\\dragon-studio-dogs-barking-02-494306.mp3");
const tweetsound = new Audio('audio\\dragon-studio-bird-chittering-sfx-364487.mp3');
const moosound = new Audio("audio\\dragon-studio-cow-moo-390282.mp3");
const baasound = new Audio('audio\\universfield-sheep-122256.mp3');

meow.onclick = function(){
    meowsound.play();
}

woof.onclick = function(){
    woofsound.play();
}

tweet.onclick = function(){
    tweetsound.play();
}

moo.onclick = function(){
    moosound.play();
}

baa.onclick = function(){
    baasound.play();
}