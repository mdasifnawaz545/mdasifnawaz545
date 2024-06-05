let url="https://api.jikan.moe/v4/anime?q=";
let inp=document.querySelector('input');
let body=document.querySelector('body');
let btn=document.querySelector('button');
btn.addEventListener("click",async(event)=>{
    event.preventDefault();
    let anime=inp.value;
    let photo= await getlist(anime);
    let div=document.createElement('div');
    body.append(div);
    div.innerHTML=`<h1>The Image of the ${anime} Character is </h1><br>  <img src="${photo}" alt="Not Found.">`
});
async function getlist(anime){
    try{
        let res=await axios.get(url+anime);
        return res.data[0].images.jpg.small_image_url;
    }
    catch(e)
    {
        console.log(`Caught an Error : ${e}`);
    }
}

let 

