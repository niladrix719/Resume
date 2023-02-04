var scroll = document.getElementsByClassName('scroll');
for(let i = 0; i < scroll.length; i++){
    scroll[i].addEventListener('click',function (event) {
        event.preventDefault();
        let secid = scroll[i].innerText.trim().toLowerCase();
        let sec = document.getElementById(secid);
        let fin = sec.getBoundingClientRect().y;
        let ini = window.pageYOffset;
        let x = setInterval(function(){
            ini += 50;
            window.scrollBy(0,50);
            if(ini >= fin)
            clearInterval(x);
        },35);
    });
}

var skillcontainer = document.getElementById('skills-display');
var skills = document.getElementsByClassName('fill-progress');
var ani = false;
window.addEventListener('scroll',checkscroll);

function animation(){
    ani = true;
    for(let i = 0; i < skills.length; i++){
        let c = 0;
        let finwidth = skills[i].getAttribute('data-width');
        let x = setInterval(function() {
            c = c + 1;
            skills[i].style.width = c + '%';
            if(c >= finwidth)
                clearInterval(x);
        },5)
    }
}

function checkscroll(){
    if(!ani && skillcontainer.getBoundingClientRect().y < window.innerHeight){
        animation();
    }
    else if(skillcontainer.getBoundingClientRect().y > window.innerHeight){
        ani = false;
    }
}