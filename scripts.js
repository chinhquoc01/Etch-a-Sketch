const sketch = document.getElementById("sketch");
let colorbtns = document.querySelectorAll('.color');
let sizebtns = document.getElementsByClassName('size');
let colorpicker = document.querySelector('#colorpicker');
let size = 10;
let color = 'black';
let blcks;
function sizepicker(sized){
    if(sized == 'small') size = 10;
    else if(sized == 'medium') size = 16;
    else if(sized == 'large') size = 32;
    let s = 640 / size; 
    while (sketch.firstChild) {
        sketch.removeChild(sketch.firstChild);
    }
    
    for(let i = 0; i < size*size; i++){
        let block = document.createElement('div');
        block.classList.add("block");
        block.style.cssText = `width: ${s}px; height: ${s}px;`;
        sketch.appendChild(block);
    }

    sketch.style.cssText = `  grid-template-columns: repeat(${size}, 1fr);
    grid-template-rows: repeat(${size}, 1fr);`

    blcks = document.querySelectorAll(".block");
    blcks.forEach(block =>  block.addEventListener('mouseover', etch) );
}


for(let i = 0; i < 16*16; i++){
    let block = document.createElement('div');
    block.classList.add("block");
    block.style.cssText = `width: 40px; height: 40px;`;
    sketch.appendChild(block);
}
sketch.style.cssText = `  grid-template-columns: repeat(16, 1fr);
grid-template-rows: repeat(16, 1fr);`
blcks = document.querySelectorAll(".block");
blcks.forEach(block =>  block.addEventListener('mouseover', etch) );    

function etch(){
    switch(color){
        case 'blue':{
            this.style.cssText = 'background-color: cadetblue;';
            break;
        }
        case 'eraser':{
            this.style.cssText = 'background-color: white';
            break;
        }
        case 'random':{
            this.style.cssText = `background-color: rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`
            break;
        }
        case 'pastel':{
            let rand = Math.floor(Math.random()*4);
            switch(rand){
                case 0:{
                    this.style.cssText = 'background-color: #f7dad9';
                    break;
                }
                case 1:{
                    this.style.cssText = 'background-color: #fff5da';
                    break;
                }
                case 2:{
                    this.style.cssText = 'background-color: #d6d2c4';
                    break;
                }
                case 3:{
                    this.style.cssText = 'background-color: #5d534a';
                    break;
                }
            }
            break;
        }
        default:{
            this.style.backgroundColor = color;
            break;
        }
    }
}



function choosecolor(e){
    switch(e.target.dataset.color){
        case 'blue':{
            color = 'blue';
            break;
        }
        case 'random':{
            color = 'random';
            break;
        }
        case 'eraser':{
            color = 'eraser';
            break;
        }
        case 'pastel':{
            color = 'pastel';
            break;
        }
        default:{
            color = 'black';
            break;
        }
    }
}

colorbtns.forEach(colorbtn => colorbtn.addEventListener('click', choosecolor));

colorpicker.addEventListener('input', changecolor, false);
colorpicker.addEventListener('change', changecolor, false);

function changecolor(event){
    color = event.target.value;
}