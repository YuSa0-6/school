new Vue({
    el: '#app',
    data() {
        return {
            range: 10,
            red: 0,
            blue: 0,
            green: 0
        };
    },
    computed: {
        bindStyle() {
            return 'width: ${this.range}px; height: ${this.range}px; bakground: rgb(${this.red}, ${this.green}, ${this.blue})';
        }
    }
});