new Vue({
    el: '#app',
    data() {
        return {
            members: [],
            name: ''
        };
    },
    methods: {
        inputName(e) {
            this.name = e.target.value;
        },
        addMember() {
            if (!this.name) return;

            const name = this.name;
            const id = Math.ceil(Math.random() * 1000);
            const member = {
                id,
                name,
                isActive: true
            };
            this.members.push(member);
            this.resetName();
        },
        resetName() {
            this.name = '';
        }
    }
});