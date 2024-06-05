let inp=document.querySelector('.college');
// let axios=require('axios');
let btn=document.querySelector('.btn');
let url="http://universities.hipolabs.com/search?name=";
let ol=document.querySelector('ol');

btn.addEventListener("click",async (event)=>{
    event.preventDefault();
    let inp_value=inp.value;
    console.log(inp_value);
    console.log(url+inp_value);
    let data=await getCollege(url+inp_value);
    display(data);
    inp.value="";
});

async function getCollege(coll){
    let data=await axios.get(coll);
    return data;
}

function display(){
    for(d of data)
    {
        let list=document.querySelector('li');
        list.innerText=d.name;
        ol.append(li);
    }
}