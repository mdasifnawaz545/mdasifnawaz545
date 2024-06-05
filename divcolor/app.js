let body=document.querySelector('body');
function bgChange(color){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            body.style.background=color;
            return resolve();
        },1500);
    })
}
async function bg(){
    await bgChange("green");
    await bgChange("blue");
    await bgChange("yellow");
    await bgChange("skyblue");
    await bgChange("black");
}
bg();