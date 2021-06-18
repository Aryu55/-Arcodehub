<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
//The initial count
let count=0

//Selecting everything
let btn=document.querySelectorAll(".btn")
let result=document.querySelector(".result")


btn.forEach(function(btn){          //Looping through every button
    btn.addEventListener("click",(e)=>{     //Adding event to every button
        const style=e.currentTarget.classList;  //Storing every class in style var
        if(style.contains("dec")){              /*If Style variable Contains 
                                                                classes like inc,dec and reset it will react accordingly 
                                                                Also it changes the backgroud and color for inc and other classes*/ 
        count-=1;
        }
        else if(style.contains("inc")){
            count+=1;
        }
        else{
            count=0;
        }
        if(count==0){
            document.body.style.backgroundColor="#17a2b8"
            document.querySelector("#reset").style.color="white"
            
        }
        if(count<0){
            document.body.style.backgroundColor="#dc3545"
            document.querySelector("#dec").style.color="white"
        }
        if(count>0){
            document.body.style.backgroundColor="#28a745"
            document.querySelector("#inc").style.color="white"
        }
        result.textContent=count
    })
=======
//The initial count
let count=0

//Selecting everything
let btn=document.querySelectorAll(".btn")
let result=document.querySelector(".result")


btn.forEach(function(btn){          //Looping through every button
    btn.addEventListener("click",(e)=>{     //Adding event to every button
        const style=e.currentTarget.classList;  //Storing every class in style var
        if(style.contains("dec")){              /*If Style variable Contains 
                                                                classes like inc,dec and reset it will react accordingly 
                                                                Also it changes the backgroud and color for inc and other classes*/ 
        count-=1;
        }
        else if(style.contains("inc")){
            count+=1;
        }
        else{
            count=0;
        }
        if(count==0){
            document.body.style.backgroundColor="#17a2b8"
            document.querySelector("#reset").style.color="white"
            
        }
        if(count<0){
            document.body.style.backgroundColor="#dc3545"
            document.querySelector("#dec").style.color="white"
        }
        if(count>0){
            document.body.style.backgroundColor="#28a745"
            document.querySelector("#inc").style.color="white"
        }
        result.textContent=count
    })
>>>>>>> edit2
=======
//The initial count
let count=0

//Selecting everything
let btn=document.querySelectorAll(".btn")
let result=document.querySelector(".result")


btn.forEach(function(btn){          //Looping through every button
    btn.addEventListener("click",(e)=>{     //Adding event to every button
        const style=e.currentTarget.classList;  //Storing every class in style var
        if(style.contains("dec")){              /*If Style variable Contains 
                                                                classes like inc,dec and reset it will react accordingly 
                                                                Also it changes the backgroud and color for inc and other classes*/ 
        count-=1;
        }
        else if(style.contains("inc")){
            count+=1;
        }
        else{
            count=0;
        }
        if(count==0){
            document.body.style.backgroundColor="#17a2b8"
            document.querySelector("#reset").style.color="white"
            
        }
        if(count<0){
            document.body.style.backgroundColor="#dc3545"
            document.querySelector("#dec").style.color="white"
        }
        if(count>0){
            document.body.style.backgroundColor="#28a745"
            document.querySelector("#inc").style.color="white"
        }
        result.textContent=count
    })
>>>>>>> edit2
=======
//The initial count
let count=0

//Selecting everything
let btn=document.querySelectorAll(".btn")
let result=document.querySelector(".result")


btn.forEach(function(btn){          //Looping through every button
    btn.addEventListener("click",(e)=>{     //Adding event to every button
        const style=e.currentTarget.classList;  //Storing every class in style var
        if(style.contains("dec")){              /*If Style variable Contains 
                                                                classes like inc,dec and reset it will react accordingly 
                                                                Also it changes the backgroud and color for inc and other classes*/ 
        count-=1;
        }
        else if(style.contains("inc")){
            count+=1;
        }
        else{
            count=0;
        }
        if(count==0){
            document.body.style.backgroundColor="#17a2b8"
            document.querySelector("#reset").style.color="white"
            
        }
        if(count<0){
            document.body.style.backgroundColor="#dc3545"
            document.querySelector("#dec").style.color="white"
        }
        if(count>0){
            document.body.style.backgroundColor="#28a745"
            document.querySelector("#inc").style.color="white"
        }
        result.textContent=count
    })
>>>>>>> edit2
})