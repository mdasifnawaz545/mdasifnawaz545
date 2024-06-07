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

// class User{
//     constructor(username,password){
//     this.username=username;
//     this.password=password;
//     }
//     getInfo(){
//         console.log(this.username+"  "+this.password);
//     }
// }

// let newUser=new User("Mohammad Asif Nawaz",433443443434);
// newUser.getInfo;

// class NewUser extends User{
//     constructor(username,password,email){
//         super(username,password);
//         this.email=email
//     }
//     getInfo(){
//         console.log(`the username is ${this.username} and password is ${this.password} and his email id is ${this.email}`);
//     }
// }

// const userNew=new NewUser("Mohammad Asif Nawaz","Password","mdasifnawaz545@gmail.com");
// userNew.getInfo;

// function setUser(username){
//     this.username=username;
// }

// function getUser(){
//     console.log(this.username);
//     console.log(this.password);
//     console.log(this.email);
// }

// function Myuser(username,password,email){
//     setUser(this,username);
//     this.password=password
//     this.email=email;
//     getUser(this);

// }

// Myuser("Mohammad Asif Nawaz","klldasjfeoi32808u","mdasifnawaz545@gmail.com");

// const ref1=Myuser("Mohammad Asif Nawaz","klldasjfeoi32808u","mdasifnawaz545@gmail.com");
// ref1;
// const ref2=Myuser("Mohammad Arif Nawaz","2808u","mdarifnawaz545@gmail.com");
// ref1;
// ref2;

// class User {
//     constructor(username, password, email) {
//         this.username = username;
//         this.password = password;
//         this.email = email;
//     }
//     get email() {
//         console.log(`The Email is : ${this._email}`)
//     }
//     set email(val) {
//         this._email = val;
//     }
// }

// let user1=new User("Mohammad Asif Nawaz","jakhf32","mdasifnawaz545@gmail.com");
// user1.email;

function func(username,password){
    this.username=this.username;
    this.password=this.password;
    return this;
}
const ref=func("MOHAMMAD ASIF NAWAZ","HAFW932923    ");
console.log(ref);