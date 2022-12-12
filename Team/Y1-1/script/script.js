const vm = new Vue({
    el: '#app',
    data() {
        return {
            id: 00,
            name: 'hotelName',
            info: 'infomation',
            rooms: [
                {
                    roomName: 'room',
                    checkIn: 'MM月DD日()',
                    checkOut: 'MM月DD日()',
                    roomInfo: 'チェックイン可能時間　～時まで'
                }, {
                    roomName: '二人部屋',
                    checkIn: 'MM月DD日()',
                    checkOut: 'MM月DD日()',
                    roomInfo: 'チェックイン可能時間　～時まで'
                }, {
                    roomName: '三人部屋',
                    checkIn: 'MM月DD日()',
                    checkOut: 'MM月DD日()',
                    roomInfo: 'チェックイン可能時間　～時まで'
                }, {
                    roomName: '4人部屋',
                    checkIn: 'MM月DD日()',
                    checkOut: 'MM月DD日()',
                    roomInfo: 'チェックイン可能時間　～時まで'
                }, {
                    roomName: '5人部屋',
                    checkIn: 'MM月DD日()',
                    checkOut: 'MM月DD日()',
                    roomInfo: 'チェックイン可能時間　～時まで'
                }
            ]
        };
    },
    methods: {
        roomDetails() {
            this.$router.push('/')
        }
    }
});