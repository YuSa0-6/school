new Vue({
    el: '#app',
    data() {
        return {
            menus: [{
                label: 'TOP',
                path: './index.html'
            }, {
                label: 'PROGRAM',
                path: './program.html'
            }, {
                label: 'DATE',
                path: './date.html'
                }],
            programs: ['カノン', '四季', '月光'],
            obj: {
                date: "11月3日",
                time: "15:00~16:00",
                place: "市民ホール"
            }
        };
    }
});