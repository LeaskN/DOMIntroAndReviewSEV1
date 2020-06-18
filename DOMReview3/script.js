let allColorEle = document.querySelectorAll('.colorBlock');

addClicks(allColorEle);

function addClicks(arr){
    for(let i = 0; i < arr.length; i++){
        arr[i].addEventListener('click', changeColor);
    }
}

function changeColor(e){
    document.body.style.backgroundColor = e.target.style.backgroundColor;
    for(let i = 0; i < allColorEle.length; i++){
        allColorEle[i].style.border = '3px solid black';
    }
    e.target.style.border = '3px solid white';
}

function postToScreen(){
    event.preventDefault();
    let textValue = document.getElementById('text').value;
    let toBeFilled = document.getElementById('fillerEle');
    toBeFilled.innerHTML = textValue;
}