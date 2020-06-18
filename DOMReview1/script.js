let body = document.body;
let allH1s = document.querySelectorAll('.header');

addAllListeners(allH1s);

function addAllListeners(param){
    for(let i = 0; i < param.length; i++){
        if( param[i].innerHTML === "World" ){
            param[i].addEventListener('click', change);
        } else {
            param[i].addEventListener('click', hit);
        }
    }
}

function hit(event){
    console.log(event.target);
}

function change(){
    console.log('changing');
}


console.log(allH1s);