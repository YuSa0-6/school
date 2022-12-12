const app = new Vue({
  el: '#app',
  data() {
    return {
      count: 1
    };
  },
  methods: {
    increment() {
      this.count = this.count * 2;
    },
    decrement() {
      this.count = this.count / 2;
    }
  }
});