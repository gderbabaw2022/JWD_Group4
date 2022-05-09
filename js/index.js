let task1= new TaskManager()
/*task1.addTask('Group4','Finish task Manager','Radika',"5/4/2022" )
task1.addTask('Group4','Finish task Manager','Marina',"5/4/2022" )
task1.addTask('Group4','Finish task Manager','Yuliya',"5/4/2022" )
console.log(task1)*/
task1.load();
task1.render();

let  submitForm= document.getElementById('taskform')

submitForm.addEventListener("submit", (event) =>{
    event.preventDefault();
    let  taskname =document.getElementById('task-name').value
    let  description=document.getElementById('description').value
    let  assignedTo=document.getElementById('assign-to').value
    let  date=document.getElementById('date').value
    let  status=document.getElementById('status').value

  /*if(validFormFieldInput(taskname)){
      document.getElementsByClassName("alert alert-warning").style.display='block' ;
  } 
  else{
    document.getElementsByClassName("alert alert-warning").style.display='block';
  }
*/
 task1.addTask(taskname,description,assignedTo,date, status)
 task1.render();
 // please make sure the inputs are cleared automatically
}) 

//  function validFormFieldInput(data){
//      if(data === ''){
//          return false;
//      }
//      else {
//          return true;
//      }
//  }


// We need to add error messages



let taskList = document.getElementById("taskslist")
taskList.addEventListener('click', (event) => { 
       
    if(event.target.classList.contains("done-button")){
        
        const parentTask = event.target.parentElement.parentElement.parentElement;
        
         const taskId = Number(parentTask.dataset.taskId)
         const task = task1.getTaskById(taskId);
           task.status = 'Done'
           task1.save();
    }
        task1.render();

     if(event.target.classList.contains('delete-button')){

        const parentTask = event.target.parentElement.parentElement.parentElement;
        const taskId = Number(parentTask.dataset.taskId)
        task1.deleteTask(taskId)
        task1.save()
    }  
        task1.render();  



    
    // const firstListItem = document.querySelector("li")
    // const list = firstListItem.parentElement



});
























