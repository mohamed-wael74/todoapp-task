let body = document.body ;
let mybtn = document.querySelector('.mybtn');
let circle = document.querySelector('.circle');
let taskInput = document.getElementById('taskInput');
let invalid = document.getElementById('invalid');
let closeValditionMessege = document.getElementById('closeValditionMessege');
let taskBtn = document.getElementById('taskBtn');
let noTask = document.getElementById('noTask');
let tasks = document.getElementById('tasks');
mybtn.onclick = function(){
    if(body.classList.contains('dark')){
        body.classList.toggle('dark');
        circle.style.float = "left";
    }

    else{
        body.classList.toggle('dark');
        circle.style.float = "right";
    }
}

let addTask = ()=>{
let inputData = taskInput.value;

if(inputData.trim() == 0 || taskInput.value.length < 3 ){
    invalid.classList.remove('none')
}else{
    noTask.classList.add('none') ;
    tasks.innerHTML += `

    <div class =" alert alert-info pb-3 ">
    ${inputData}
    <button class = 'btn btn-danger float-right pb-2' > Delete </button>  
    </div>
    
    `
    taskInput.value=""
}
}
 
let removeINvalid =()=>{
    invalid.classList.add('none')
}

taskBtn.addEventListener('click',addTask);

closeValditionMessege.addEventListener('click', removeINvalid );

document.addEventListener('click', function(t){
    if(t.target.classList.innerText('Delete')){
        t.target.parentElement.remove();
        
    }
})