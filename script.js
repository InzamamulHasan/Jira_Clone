const openModalBtn = document.querySelector(".add_task_btn");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close");
const addTaskForm = document.getElementById("add-task-form");



function openModal(){
    modal.style.display="flex";
    console.log("inza")
}
let a=17;
closeModal.addEventListener('click',add);
function add(){
    modal.style.display="none";
    console.log(a);
}
let flag=false;
let ind;
let arr=[];
var c=0;
addTaskForm.addEventListener("submit",dataadd);
function dataadd(event){
    event.preventDefault();
    let tsk=document.getElementById("task-name");
    let prt=document.getElementById("priority");
    let dte=document.getElementById("due-date");
    let sts=document.getElementById("status");
    if(tsk.value==""||prt.value==""||dte.value==""||sts.value==""){
        alert("Select the data");
        return;
    }
    if(flag==true){
        let obj={
            id:ind,
            task:tsk.value,
            priority:prt.value,
            date:dte.value,
            status:sts.value, 
        }
        arr[ind]=obj;
        addTaskForm.reset();
        modal.style.display="none";
        flag=false;
        display(arr);
        return;
    }
    c++;
    let obj={
        id:c,
        task:tsk.value,
        priority:prt.value,
        date:dte.value,
        status:sts.value, 
    }
    console.log(obj);
    arr.push(obj);
    addTaskForm.reset();
    modal.style.display="none";
    display(arr);
    console.log(arr);
}


let data1=document.querySelector(".not-started");
let data2=document.querySelector(".in-progress");
let data3=document.querySelector(".completed");
function display(arr){
    data1.innerHTML="<h2>Not Started</h2>";
    data2.innerHTML="<h2>In Progress</h2>";
    data3.innerHTML="<h2>Completed</h2>";
    arr.forEach((el,index)=>{
        let ul=document.createElement("ul");
        let li1=document.createElement("li")
        let div11=document.createElement("div");
        div11.setAttribute("class","l11");
        div11.innerText=el.task;
        let div12=document.createElement("div");
        div12.setAttribute("class","l12");
        div12.innerText=el.date;
        li1.append(div11,div12)
        let li2=document.createElement("li");
        let div21=document.createElement("div");
        div21.setAttribute("class","l21");
        div21.innerText=el.priority;
        if(el.priority=="low"){
            div21.style.backgroundColor="green";
        }else if(el.priority=="medium"){
            div21.style.backgroundColor="yellow";
        }else if(el.priority=="high"){
            div21.style.backgroundColor="red";
        }
        let div22=document.createElement("div");
        div22.setAttribute("class","l22");
        div22.innerText=el.status;
        if(el.status=="completed"){
            div22.style.backgroundColor="green";
        }else if(el.status=="in-progress"){
            div22.style.backgroundColor="orange";
        }else if(el.status=="not-started"){
            div22.style.backgroundColor="red";
        }
        li2.append(div21,div22);
        let li3=document.createElement("li");
        let div31=document.createElement("div");
        let span1=document.createElement("span");
        span1.setAttribute("class","material-symbols-outlined edit");
        span1.innerText="edit";
        span1.addEventListener("click",function(){
            modal.style.display="flex";
            document.getElementById("task-name").value=el.task;
            document.getElementById("priority").value=el.priority;
            document.getElementById("due-date").value=el.date;
            document.getElementById("status").value=el.status; 
            ind=index;
            flag=true;
            
        })
        div31.append(span1);
        let div32=document.createElement("div");
        let span2=document.createElement("span");
        span2.setAttribute("class","material-symbols-outlined del");
        span2.innerText="delete";
        span2.addEventListener("click",()=>{
            arr.splice(index,1);
            display(arr);
        })
        div32.append(span2);
        li3.append(div31,div32);
        ul.append(li1,li2,li3);
        if(el.status=="completed"){
            data3.append(ul);
        }else if(el.status=="in-progress"){
            data2.append(ul)
        }else if(el.status=="not-started"){
            data1.append(ul);
        }
        
    })
}  
function myFunction(){
    let datas=document.getElementById("ser").value;
    let newrr=arr.filter((el)=>{
        if(el.task.includes(datas)||el.priority.includes(datas)||el.date.includes(datas)||el.status.includes(datas)){
            return el;
        }
    })
    display(newrr);
    if(datas==""){
        display(arr);
    }
    console.log(newrr);
}
   


    /*ul.innerHTML+=`<li><div class="l11">${el.task}</div><div class=l12>${el.date}</div></li>
                   <li><div class="l21">${el.priority}</div><div class="l22">${el.status}</div></li>
                   <li><div class="l31"><span class="material-symbols-outlined">
                   delete</span>
                   </div>
                   <div class="132">
                   <span class="material-symbols-outlined">
                   edit</span>
                   </div>
                   </li`;*/
                


