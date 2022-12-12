// Vueで作成したファイルをjsに変換して出力する

new Vue(
    // オブジェクトの定義
    {
        el: "#app",

        data() {
            return {
                count: 59,
            };
        },
        methods: {
            inclement() {
                this.count++;
            },
            decrement() {
                this.count--;
            }
        }
    }
);
