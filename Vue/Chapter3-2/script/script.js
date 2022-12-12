const app = new Vue({
  el: '#app',
  data() {
    return {
      object: '',
      fee: 0
    };
  },
  methods: {
    displaySquid() {
      this.object += "Squid ";
      this.fee += 200;
    },
    displayOctopus() {
      this.object += "Octopus ";
      this.fee += 300;
    }
  }
});