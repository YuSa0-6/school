new Vue({
    el: '#app',
    data() {
        return {
            todos: [],
            text: ''
        };
    },
    methods: {
        inputText(e) {
            this.text = e.target.value;
        },
        addTodo() {
            if (!this.text) return;

            const text = this.text;
            const id = Math.ceil(Math.random() * 100);
            const todo = {
                id,
                text,
                isDone: false
            };
            this.todos.push(todo);
            this.resetText();
        },
        resetText() {
            this.text = '';
        },
        deleteTodo(id) {
            const index = this.id;
            this.todos.splice(index, 1);
        },
        toggleTodo(id) {
            const index = this.getIndexBy(id);
            thisl.todos[index].isDone = !this.todos[index].isDone;
        }
    },
    computed: {
        doneTodo() {
                return this.todos.filter(todo => todo.isDone === true);
        },
        incompleteTodo() {
            return this.todos.filter(todo => todo.isDone === false);
        }
    }
});