const vm = new Vue({
    el: '#app',
    data() {
        return {
            id: 00,
            name: 'hotelName',
            info: 'infomation',
            rooms: [
                {
                    room_id: 0,
                    roomName: 'room',
                    checkIn: 'MM月DD日()',
                    checkOut: 'MM月DD日()',
                    roomInfo: 'チェックイン可能時間　～時まで',
                    src: "../photo/hotel/hotel_7.jpg"
                }, {

                    room_id: 1,
                    roomName: '三人部屋',
                    checkIn: 'MM月DD日()',
                    checkOut: 'MM月DD日()',
                    roomInfo: 'チェックイン可能時間　～時まで',
                    src: "../photo/hotel/hotel_8.jpg"
                }, {
                    room_id: 2,
                    roomName: '二人部屋',
                    checkIn: 'MM月DD日()',
                    checkOut: 'MM月DD日()',
                    roomInfo: 'チェックイン可能時間　～時まで',
                    src: "../photo/hotel/hotel_7.jpg"
                }, {
                    room_id: 3,
                    roomName: '三人部屋',
                    checkIn: 'MM月DD日()',
                    checkOut: 'MM月DD日()',
                    roomInfo: 'チェックイン可能時間　～時まで',
                    src: "../photo/hotel/hotel_7.jpg"
                }, {
                    room_id: 4,
                    roomName: '三人部屋',
                    checkIn: 'MM月DD日()',
                    checkOut: 'MM月DD日()',
                    roomInfo: 'チェックイン可能時間　～時まで',
                    src: "../photo/hotel/hotel_7.jpg"
                }
            ]
        };
    },
    methods: {
        linkRoom(room_id) {
            window.sessionStorage.setItem(['room_id'], room_id);
            location.href = './C1-1.html';
        }
    }
});