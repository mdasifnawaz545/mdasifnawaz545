// WAP to change the text color using promises.

let text=document.querySelector('h1');

function changeColor(colour){
    return new Promise((success,failure)=>{
        setTimeout((color) => {
            text.style.color=colour;
           return success();
        }, 2000);
    });
}

async function d(){
    await changeColor('green');
    await changeColor('blue');
    await changeColor('yellow');
    await changeColor('purple');
    await changeColor('green');
}

d();