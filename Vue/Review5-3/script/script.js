new Vue({
    el: '#app',
    data() {
        return {
            name: '',
            count: 0,
            departments: ['情報工学科','情報システム専攻科','情報システム科']
        };
    },
    methods :{
        increment() {
                this.count++;
            },
        decrement() {
                this.count--;
            }   
    }
});