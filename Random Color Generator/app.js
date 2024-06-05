let btn=document.querySelector('button');
btn.addEventListener('click', ()=>{
    let color= getCol();
    let body=document.querySelector('body');
    body.style.background=color;
});
function getCol()
{
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let col=`rgb(${red},${green},${blue})`;
    return col;
}