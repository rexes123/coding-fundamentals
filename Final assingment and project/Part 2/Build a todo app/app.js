const list = document.getElementById('todo-list')
const input = document.getElementById('todo-input')
const button = document.getElementById('todo-button')

button.addEventListener('click',addTodo)

// feature addTodo
function addTodo(){
   // e.preventDefault()
   //Get the length from list.children // because array start from 0, so +1, can get a id number start from 1 instead
   let id = list.children.length + 1
   let item = input.value
   if (!item) return // if no item,then cannot add new todo


    const newTodo = `
    <li id="${id}">
    <span>${item}</span>
    <button onclick="completedTodo(${id})">Completed</button>
    <button onclick="deleteTodo(${id})">Deleted</button>
       </li>`
        
   list.innerHTML += newTodo

    // clear input
     input.value = '' //item === input.value
}
// findTodo
function findTodo(id){
   return list.children[id - 1]
}
// feature completedTodo
  function completedTodo(id){
     const item = findTodo(id) //item = input.value
     const span = item.firstElementChild
     span.toggleAttribute('done')

     const status = span.getAttribute('done') == null ? false : true
     const button = item.children[1]
     button.innerHTML = status ? 'Undo' : 'Complete'
  }

//feature deleteTodo
  function deleteTodo(id){
     const item = findTodo(id) 
     item.classList.add('deleted__todo')
  }



