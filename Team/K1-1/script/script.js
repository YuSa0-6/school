new Vue({
  el: '#app',
  data() {
    return {
      roomNum: 00,
      modalDefault: true,
      modalChanged: false,
      inputName: [],
      checkedNames: [
        {
          tagid: 11,
          tagName: '昼食付'
        }, {
          tagid: 12,
          tagName: '朝食付'
        }, {
          tagid: 13,
          tagName: '夕食付'
        }, {
          tagid: 14,
          tagName: '食事なし'
        }, {
          tagid: 15,
          tagName: '朝昼食付'
        }, {
          tagid: 16,
          tagName: '3食付き'
        }
      ]
    }
  },
  methods: {
    changeModal() {
      this.modalDefault = !this.modalDefault;
      this.modalChanged = !this.modalChanged;
    },
    linkRoom() {
      location.href = '../K2-1/index.html';
    }
  }
});