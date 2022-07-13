console.log('vue ok', Vue)

const root = new Vue ({
    el: "#root",
    data : {
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
        toggleDone(task) {  // passo parametro solo se l'azione da compire riguarda l'osggetto stesso o il suo indice 
           return task.done = !task.done
        },
        removeTask(i) {
            this.tasks.splice( i , 1 )
        }

    }
})