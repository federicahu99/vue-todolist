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
        underlineIt() {
            if (this.done = false) {
                return this.done = true;
            }
        }
        
    }
})