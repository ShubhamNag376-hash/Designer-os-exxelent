let tasks=[
"Hour1 Tool Practice",
"Hour2 Design Execution",
"Hour3 Branding Thinking",
"Hour4 UI Study",
"Hour5 UX Psychology",
"Hour6 Composition",
"Hour7 Portfolio"
];

const tasksContainer=document.getElementById("tasks");

function renderTasks(){
tasksContainer.innerHTML="";
tasks.forEach((t,i)=>{
let div=document.createElement("div");
div.className="task";
div.draggable=true;
div.innerText=t;

div.ondragstart=e=>{
e.dataTransfer.setData("text/plain",i);
};

div.ondragover=e=>e.preventDefault();

div.ondrop=e=>{
let from=e.dataTransfer.getData("text/plain");
let temp=tasks[from];
tasks.splice(from,1);
tasks.splice(i,0,temp);
renderTasks();
};

tasksContainer.appendChild(div);
});
}

function renderCalendar(){
let cal=document.getElementById("calendar");
for(let i=1;i<=30;i++){
let d=document.createElement("div");
d.className="day";
d.innerText=i;
cal.appendChild(d);
}
}

function toggleTheme(){
document.body.classList.toggle("dark");
}

function updateTime(){
document.getElementById("datetime").innerText=
new Date().toLocaleString();
}
setInterval(updateTime,1000);

let time=3600;
let interval;

function startTimer(){
clearInterval(interval);
interval=setInterval(()=>{
time--;
let m=Math.floor(time/60);
let s=time%60;
timer.innerText=m+":"+(s<10?"0":"")+s;
if(time<=0){alert("Session Complete");}
},1000);
}

function resetTimer(){
clearInterval(interval);
time=3600;
timer.innerText="60:00";
}

function drawChart(){
let ctx=document.getElementById("chart").getContext("2d");
let data=[5,7,4,6,8];
let x=20;
data.forEach(v=>{
ctx.fillRect(x,150-v*10,20,v*10);
x+=40;
});
}

renderTasks();
renderCalendar();
drawChart();
updateTime();
