new Vue({
    el: '#app',
    data() {
        return {
            menus: [{
                label: 'TOP',
                path: './index.html'
            }, {
                label: 'KADAI1',
                path: './kadai1.html'
            }, {
                label: 'KADAI2',
                path: './kadai2.html'
            }, {
                label: 'KADAI3',
                path: './kadai3.html'
                }],
            text: '今日は暖かいです',
            number: 1234567,
            name: 'name',
            count: 0
        };
    },
    methods: {
        handleClick() {
            this.text = '今日は寒いです';
        },
        increment() {
            this.count++;
        },
        decrement() {
            this.count--;
        }
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