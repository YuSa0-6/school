const URL_API = "https://api//zipaddress.net/";
//｛｝内にオブジェクトの定義
const app = new Vue({
    //プロパティ：値のセットを書く
  el: '#app',
  data: {
    inputZip: ","
    defaultZip: '0000000',
    code: '200'
    address:""
  },
  computed: {
    success() {
      return this.code == 200;
    },
    methods: {
      getAddress(z) {
        let params = { params: (zipcode: z)};
        axios
          .get(URL_API, params)
          .then(res => {
            this.code = res.data.code;
            this.address = res.data.data.fullAddress;
          });
      }
    }
  }
});