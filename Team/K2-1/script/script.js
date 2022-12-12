const app = new Vue({
    el: '#app',
    data() {
        return {
            location: '場所',
            date: '日時',
            roomCnt: 00,
            peopleNum: 00,
            condition: 'こだわり条件',
            selected: 'A',
            options: [
                { text: 'おすす順', value: 'A' },
                { text: '高い順', value: 'B' },
                { text: '安い順', value: 'C' }
            ],
            hotels: [
                { id:00, name: '旅館', plan: 'プラン', location: '場所', charge: '料金', src: "./photo/hotel/hotel_7.jpg" },
                { id:01, name: '旅館', plan: 'プラン', location: '場所', charge: '料金', src: "./photo/hotel/hotel_7.jpg" },
                { id:02, name: '旅館', plan: 'プラン', location: '場所', charge: '料金', src: "./photo/hotel/hotel_7.jpg" }
            ]
        }
    },
    methods: {
        linkRoom(room_id) {
            window.sessionStorage.setItem(['room_id'], room_id);
            location.href = './C1-1.html';
        }
    }
});