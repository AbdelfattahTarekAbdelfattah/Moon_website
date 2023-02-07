let stars = document.getElementById('star');
let moon = document.getElementById('moon');
let mountain3 = document.getElementById('mountain3');
let mountain4 = document.getElementById('mountain4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let mountains7 = document.getElementById('mountains7');
let html = document.querySelector('.por');

window.onscroll = function(){
    let value = scrollY;
    star.style.left = value + 'px';
    moon.style.top = value * 4 + 'px';
    mountain3.style.top = value * 2 + 'px';
    mountain4.style.top = value * 1.5 + 'px';
    river.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value * 3 + 'px';
    html.style.fontSize = value + 'px';
    if(scrollY >= 120){
        main.style.fontSize = 120 + 'px';
        main.style.position = 'fixed';
    }
    if(scrollY >= 373){
        main.style.display = 'none';
    }
    else{
        main.style.display = 'block';
    }
    if(scrollY >= 200){
        document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)'
    }
    else{
        document.querySelector('.main').style.background = 'linear-gradient(#200016,#10001f)'

       }
}

