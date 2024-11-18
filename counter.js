const decrease=document.getElementById("decrease");
const reset=document.getElementById("reset");
const increase=document.getElementById("increase");
const countlabel=document.getElementById("countlabel");

let count=0;
decrease.onclick=function(){
    --count;
countlabel.textContent=count;
}
increase.onclick= function(){
    count++;
countlabel.textContent=count;
}
reset.onclick= function(){
    count=0;
countlabel.textContent=count;
}
/*
we got elements by their id , declared as constants
declared a variabe count as 0 ,
made function of each variable to get text content on click and display value,
*/

//hello gittu