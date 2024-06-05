// let heading = document.createElement('h1');
// heading.innerText="Color Changed";
// let body = document.querySelector('body');
// body.appendChild(heading);

// async function changeColor(color){
//     setTimeout(() => {
//         heading.style.color = color;
//     }, 1000);

// };
// let color=["green","blue","wheat","aliceblue","skyblue"];

// async function func(){

//     for(let i=0;i<color.length;i++){
//         await changeColor(color[i]);
//     }
//     await changeColor("green");
//     console.log("Okay from await")

//     await changeColor("blue");
//     console.log("Okay from await")

//     await changeColor("wheat");
//     console.log("Okay from await")

//     await changeColor("aliceblue");
//     console.log("Okay from await")

//     await changeColor("skyblue");
//     console.log("Okay from await")
// }

// func();

// ****************************************++++++++++++++++++++++++++++****************************************++++++++++++++++++++++++++++

// let  a = "false";
// let bool=Boolean(a);
// console.log(a);
// console.log(bool);

// let para=document.createElement('p');
// let body=document.querySelector('body');

// const  url="https://randomuser.me/api/";
// let apiCall=async (urll)=>{
//     let apiData=await fetch(urll);
//     let apiDataJson=await apiData.json();
//     let streetName=apiDataJson.results[0].location.street.name;
//     let userName=apiDataJson.results[0].name.first;
//         para.innerHTML=`<b><i>Hello, ${userName} from ${streetName}</i></b>`
//     body.appendChild(para)
//     console.log(apiDataJson);
// }
// apiCall(url);

// let div=document.createElement('div');
// div.style.width='500px';
// div.style.height='500px';
// div.style.border='2px solid green'
// document.body.appendChild(div);

// div.addEventListener('click',(event)=>{
//     div.style.position='absolute'
//     console.log(event.y);
//     console.log(event.x);
//     let circle=document.createElement('div');
//     circle.style.position='relative'
//     circle.style.height='50px'
//     circle.style.width='50px';
//     circle.style.borderRadius='50px'
//     circle.style.border='1px solid green'
//     console.log(circle.nodeName);
//     circle.style.left=`${event.offsetX}px`;
//     circle.style.top=`${event.offsetY}px`;
//     div.appendChild(circle);
// })

// let list=document.querySelector('.unordered');
// list.addEventListener('click',(e)=>{
//     let listitem=e.target.parentNode;
//     listitem.style.display='none';
// })

// let str=new String("Javascript    ");

// String.prototype.trueLength=()=>{
//     console.log(`Truelength`)
// }
// str.trueLength();

