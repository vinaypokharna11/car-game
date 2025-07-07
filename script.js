// let Name=prompt("enter your name");
// if(Name=="vanshi"){
// alert(`heyy !! babe... vinay love you and  Happy to have you ${Name} !! have funn`)
// }
// else{
//    alert(`Happy to have you ${Name} !! have funn`)
// }

let car=document.querySelector("#car");
let margin=0;
let up=0;
let lap=0;

car.addEventListener("keydown",(e)=>{

   if(e.key=="ArrowRight"){
       margin+=5;
    car.style.marginLeft=margin+"px";  
     car.style.transform="scaleX(1)";
    car.style.transform="rotate(90deg)";
      
   }
   
   else if(e.key=="ArrowLeft"){
       margin-=5;
    car.style.marginLeft=margin+"px";
    car.style.transform="scaleX(-1)";
    car.style.transform="rotate(270deg)";
   }
   else if(e.key=="ArrowUp"){
       up-=5;
    car.style.marginTop=up+"px";
     car.style.transform="rotate(0deg)";

   }
   else if(e.key=="ArrowDown"){
       up+=5;
    car.style.marginTop=up+"px";
     car.style.transform="rotate(180deg)";
   }
    
});
car.focus();

