
  function createTaskHtml (id,name,description,assignedTo,dueDate,status){

   const Html= `<li data-task-id=${id} class="list-group-item">
        <div class="card mb-4">
        <div class="card-header bg-transparent font-weight-bold">${status}</div>
        <div class="card-body">
            <h5 class="card-title">Task name : ${name}</h5>
           <p class="card-text">Assigned To : ${assignedTo}<br>Due Date: ${dueDate}<br></p>
        </div>
        <div class="card-footer bg-transparent text-center">
         <button type="button" class="btn btn-primary  done-button">Mark as Done</button>
         <button type="button" class="btn btn-danger delete-button">Delete</button>
        </div>
    </div>
</li>`
return Html      
}



class TaskManager {
    constructor(currentId=0){
    this.tasks=[];
    this.currentId=currentId;
    }
    addTask(name,description,assignedTo,dueDate,status='ToDO'){
     //  let  objectId =this.currentId++;
   // the id is starting from zero we have to fix it

        let task_object={
            id : this.currentId++,
            name : name ,
            description: description ,
            assignedTo: assignedTo ,
            dueDate: dueDate ,
            status: status 
        }
        this.tasks.push(task_object)
    }


 // Write a function to reset the id when it reaches maximum
 // Render method 
    render (){

      let   tasksHtmlList=[]

      for( let i=0 ; i<this.tasks.length ; i++){
           let  currentTask = this.tasks[i]
           let date = new Date( currentTask.dueDate)
           let formattedDate = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
           let taskHtml = createTaskHtml(currentTask.id, currentTask.name ,currentTask.description ,currentTask.assignedTo , formattedDate ,currentTask.status)
           
           tasksHtmlList.push(taskHtml)
      }
            let tasksHtml = tasksHtmlList.join("\n ") 
            document.getElementById("taskslist").innerHTML=tasksHtml
    }

    getTaskById(taskId) {
        
        let foundTask;

        for (let i = 0; i < this.tasks.length; i++) {
            //  current task in the loop
            const task = this.tasks[i];

            if (task.id === taskId) {
        
                foundTask = task;
        
        }
    }

        // Return the found task
        return foundTask;
    }

    save(){ 
        let tasksJson = JSON.stringify(this.tasks)
        localStorage.setItem("Tasks",tasksJson)
        let  currentId = this.currentId.toString();
        localStorage.setItem("currentId",currentId)
    }

    load(){
        let tasksJson = localStorage.getItem("Tasks");
        this.tasks = JSON.parse(tasksJson);
        let currentId = localStorage.getItem("currentId")
        this.currentId = parseInt(currentId);

    }

    deleteTask(taskId){
        let newTasks = [];
        for(let i = 0;i<this.tasks.length;i++){
            let task = this.tasks[i]
            if(task.id !== taskId){
                newTasks.push(task);
            }
        }
        this.tasks = newTasks;
    }
    
}
