
const colors=["#0097e6","#8c7ae6","#e1b12c","#44bd32","#40739e",
                    "#FEA47F","#25CCF7","#EAB543","#CAD3C8","#B33771",
                    "#00b894","#00cec9","#0984e3","#e84393","#e17055","#fdcb6e"]            
              
const btn =document.getElementById("btn");
const cname=document.getElementById("cname")
const bg=document.getElementById("bg")
const c3=document.querySelector(".c3")

btn.addEventListener("click",()=>{
    const rnum=Getrnum();
    const rnum2=Getrnum2();
    document.body.style.backgroundColor=colors[rnum]
    c3.textContent=colors[rnum]
    bg.style.backgroundColor=colors[rnum2]
    cname.textContent=colors[rnum2]
    
})
function Getrnum(){
    return Math.floor(Math.random()*colors.length)
}
function Getrnum2(){
    return Math.floor(Math.random()*colors.length)
}