const prompt = require("prompt-sync")();


let isCompleted = '✅';
let isNotComplete = '❌'; 
class Todo {
  constructor() {
    this.list = ["Learn Javascript(Example)" + isNotComplete];
    this.isQuit = false;
    do {
      this.display();
    } while (this.isQuit !== true);
  }

  display() {
    console.log(`
---------TODO APP-----------
What would you like to do?
1. View my todo list
2. Add new todo
3. Edit a todo item
4. Toggle complete a todo
5. Delete a todo
6. Quit app
`);
    this.value = prompt("Enter (1/2/3/4/5): ");
    this.value = parseInt(this.value); //parseInt only select a first number of string
    this.selection();
  }

  selection() {
    switch (this.value) {
      case 1:
        this.getTodo();
        break;
      case 2:
        this.addTodo();
        break;
      case 3:
        this.editTodo();
        break;
      case 4:
        this.toggleTodo();
        break;
      case 5:
        this.deleteTodo();
        break;
      case 6:
        this.quitApp();
        break;
    }
  }

  getTodo() {
    let iteration = 1;
    for (let i in this.list) {
      console.log("#" + iteration + ": " + this.list[i]);
      iteration++;
    }
  }

  addTodo() {
    let addTodo = prompt("Enter your task: ");
    this.list.push(addTodo + isNotComplete);
  }

  editTodo() {
    let edit = prompt("Enter the todo id you want to edit: ");
    let changeTodo= prompt("Change the todo item to: ");
    this.list.splice(edit - 1, 1, changeTodo + isNotComplete);
  }

  toggleTodo() {
    let number = prompt("Enter the todo id you want to toggle complete: ");
    let todo = this.list[number-1]
    if(todo.split('').splice(-1) == isNotComplete){
        var newtodo = todo.replace(isNotComplete, isCompleted)
        this.list.splice(number-1, 1, newtodo)
    }
    
    else {
        let newtodo = todo.replace(isCompleted, isNotComplete)
        this.list.splice(number-1, 1, newtodo)
    }
    console.log(newtodo);
  }


  deleteTodo() {
    var number = prompt("Enter the todo want to cancel: ");
    this.list.splice(number-1, 1)
  }

  quitApp() {
    this.isQuit = true;
  }
}

const todo = new Todo
todo
