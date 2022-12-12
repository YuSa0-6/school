new Vue({
    el: "#app",
    data() {
        return {
            number: 1234567,
            name: 'name'
        };
    },
    computed: {
        isInValidNum() {
            return this.number.length != 7
        },
        isInValidName() {
            return this.name.length < 4
        }
    }
});