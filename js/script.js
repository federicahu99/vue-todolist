console.log('vue ok', Vue)

const root = new Vue ({
    el: "#root",
    data : {
        newTask: '',
        tasks: [
        {
            text: 'Fare la lavatrice',
            done: false
        },
        {
            text: 'Lavare l\'auto',
            done: false
        },
        {
            text: 'Portare Fuffi fuori',
            done: false
        },
        {
            text: 'Pulire il garage',
            done: false
        }
    ]}, 
    methods: {
        toggleDone(task) {  // passo parametro solo se l'azione da compire riguarda l'oggetto stesso o il suo indice 
           return task.done = !task.done
        },
        removeTask(i) {
            this.tasks.splice( i , 1 )
        },
        addTask() {
            let object = { //pusho oggetto non array
                text: this.newTask,
                done: false
            }
            this.tasks.push(object);
            this.newTask= '';
        }

    }
})