

   
 const hex=[0,1,2,3,4,5,6,7,8,9,
                    "A","B","C","D","E",
                       "a","b","c","d","e"];                   
const btn =document.getElementById("btn");
const cname=document.getElementById("cname")
const bg=document.getElementById("bg")
const c3=document.querySelector(".c3")

btn.addEventListener("click",()=>{
    let hexcolor = "#";
    for(let j=0 ; j<6 ; j++){
        hexcolor+=hex[Getrnum()]
    }
    let hexcolor2= "#";
    for(let j=0 ; j<6 ; j++){
        hexcolor2+=hex[Getrnum2()]
    }
    document.body.style.backgroundColor=hexcolor
    c3.textContent=hexcolor
    bg.style.backgroundColor=hexcolor2
    cname.textContent=hexcolor2
    
})
function Getrnum(){
    return Math.floor(Math.random()*hex.length)
}
function Getrnum2(){
    return Math.floor(Math.random()*hex.length)
}
