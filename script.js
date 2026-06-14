const darkBtn =
document.getElementById("darkModeBtn");

darkBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

});

document
.getElementById("volunteerForm")
.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank you for volunteering!");

this.reset();

});

function animate(id,target){

let count=0;

let speed=target/100;

let interval=setInterval(()=>{

count+=speed;

if(count>=target){

count=target;

clearInterval(interval);

}

document.getElementById(id).innerText=
Math.floor(count);

},20);

}

window.onload=()=>{

animate("count1",500);
animate("count2",1200);
animate("count3",75);

};