new Vue({
    el: '#app',
    data() {
        return {
            isChanged: false,
            scale: 1,
            red: 1
        }
    },
    methods: {
        changeStyle() {
            this.isChanged = !this.isChanged;
        }
    },
    computed: {
        bindStyle() {
            return `font-size: ${this.scale}px; color: rgb(${this.red},20,100)`
        }
    }
});