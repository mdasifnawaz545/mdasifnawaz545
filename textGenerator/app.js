let inp=document.querySelector('#inp');
let para=document.createElement('p');
inp.addEventListener("change",(event)=>{
    event.preventDefault();
    console.log(inp.value);
    para.innerHTML=`<h1></h1>Your Text is ${inp.value}`;
    inp.appendChild(para);
})