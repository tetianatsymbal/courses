class TodoList{
    constructor(id){
        this.todo = $(id);
        this.list = this.todo.children(".todo-list");
        this.task = this.todo.find(".textfield");
        this.btnAdd = this.todo.find(".add-btn");
        this.taskTemplate = this.list.children(".todo-item:first-child");
        this.btnClear = this.todo.find(".clear-btn");

        this.loadTasks();
        this.createEvents();
    }
    loadTasks(){
        data.tasks.forEach((currentTask) => {
            this.putTask(currentTask.task, currentTask.done);
        });
    }
    addTask(){
        let taskText = this.task.val();
            if(taskText){
                this.task.removeClass("task-error");
                this.putTask(taskText, false);
                data.tasks.push({"task":taskText,"done":false});
                console.log(data.tasks)
            }
            else{
                this.task.addClass("task-error");
            }
    }
    putTask(taskText, isDone){
        let currentTaskTemplate = this.taskTemplate.clone(),
            currentTaskTitle = currentTaskTemplate.children(".title"),
            currentTaskBtnDel = currentTaskTemplate.children(".del-btn")
            ;
        currentTaskTitle.text(taskText);
        currentTaskTitle.toggleClass("done", isDone);
        currentTaskTitle.click(this.setTaskDone.bind(this));
        currentTaskBtnDel.click(this.delTask.bind(this));
        this.list.append(currentTaskTemplate);
    }
    setTaskDone(event){
        let currentTask = $(event.currentTarget),
            currentTaskIndex = this.getTaskIndex(currentTask.text(), currentTask.hasClass())
            ;
        console.log(currentTaskIndex);
        data.tasks[currentTaskIndex].done = ! data.tasks[currentTaskIndex].done;
        currentTask.toggleClass("done");
    }
    getTaskIndex(currentTaskText){
        // let currentTask = {"task":currentTaskText, "done": isCurrentTaskDone},
        let currentTaskIndex = 0;
            data.tasks.filter((taskData, index) => {
                console.log(taskData.task, currentTaskText, index, taskData);
                if (taskData.task == currentTaskText){
                    currentTaskIndex = index;
                }
            });
            // console.log(currentTaskIndex);
        return currentTaskIndex;
    }

    delTask(event){
        let currentTaskDelBtn = $(event.currentTarget),
            currentTask = currentTaskDelBtn.siblings(),
            currentTaskText = currentTask.text(),
            isCurrentTaskDone = currentTask.hasClass("done"),
            currentTaskIndex = this.getTaskIndex(currentTaskText, isCurrentTaskDone)
            ;
        currentTaskDelBtn.parent().remove();
        data.tasks.splice(currentTaskIndex, 1);
        console.log(data.tasks);
    }
    createEvents(){
        this.btnAdd.click(this.addTask.bind(this));
        // this.btnClear.click(this.move.bind(this));
    }
}
let todo = new TodoList("#todo");