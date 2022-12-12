public class Item{
    private String imageFileName;   //画像ファイル名
    private String name;    //商品名
    private int price;      //値段 

    //コンストラクタ
    public Item(String imageFileName,String name,int price){
        this.imageFileName = imageFileName;
        this.name = name;
        this.price = price;
    }
    //getter
    public String getImageFileName() {
        return imageFileName;
    }
    public String getName() {
        return name;
    }
    public int getPrice() {
        return price;
    }
    //【注意！！】
    //setterは省略しています。
    //基本的にgetterとsetterは書きます！

}
