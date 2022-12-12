new Vue({
    el: '#app',
    data () {
        return {
            tanka: 0,
            nin: 0,
            kei: 0
        };
    },
    methods: {
        multiply() {
            this.kei = this.tanka*this.nin;
        }
    },
    computed: {
        isInValidKei() {
            return this.kei > 20000;
        }
    }
});