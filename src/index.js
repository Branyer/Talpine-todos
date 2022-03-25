import Alpine from 'alpinejs'
import "./main.css"
 
Alpine.data('todosState', () => ({
    todos: [ 
            { status: "active", description: "Go to the gym" },
            { status: "active", description: "Go to the market" },
            { status: "completed", description: "Cut the lawn" },
        ],
    todoSearchType: "all",
    newTodoDescription: "",
    addTodo() {
        this.todos.push({status: 'active', description: this.newTodoDescription }); 
        this.newTodoDescription = ''
    },
    filterTodos() {
        return this.todos.filter( el => this.todoSearchType === 'all' ? true : el.status === this.todoSearchType)
    },
    changeTodoStatus(index) {
        this.todos[index].status =  this.todos[index].status === 'active' ? 'completed' : 'active'
    },
    clearCompleted() {
        this.todos =  this.todos.filter(el => el.status !== 'completed')
    }
}))

 
Alpine.start()
