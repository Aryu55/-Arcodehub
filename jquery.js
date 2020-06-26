var dest= new Date("june 25,2020 6:25:00").getTime()
var x=setInterval(()=>{

var now=new Date().getTime()

var diff =dest-now

var days=Math.floor(diff/(1000*60*60*24))

var hours=Math.floor((diff%(1000*24*60*60))/(1000*60*60))

var minutes=Math.floor((diff%(1000*60*60))/(1000*60))

var seconds=Math.floor((diff%(1000*60))/(1000))

document.querySelector(".demo").innerHTML=`${days}d ${hours}hrs ${minutes}m ${seconds}s`
},1000)