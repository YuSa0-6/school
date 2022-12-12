const app = new Vue({
  el: "#app",
  data() {
    return {
      text: '今日は暖かいです'
    };
  },
  methods: {
    handleClick() {
      this.text = '今日は寒いです';
    }
  }
});