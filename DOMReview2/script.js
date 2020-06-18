let allElements = document.querySelectorAll('div');
addClicks(allElements);

function addClicks(arr){
    for(let i = 0; i < arr.length; i++){
        arr[i].addEventListener('mouseover', changeColor);
    }
}

function changeColor(e){
    document.body.style.color = e.target.innerHTML;
    // document.body.setAttribute('style', `color: ${e.target.innerHTML}`);
}

console.log('hello world');