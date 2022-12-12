import java.util.ArrayList;
import java.util.List;
import java.util.Collections;

public class ArrayListSample2 {
  public static void main(String[] arags) {
    List<Item> itemList = new ArrayList<>();

    // 商品をセット
    // 1つ目
    Item item1 = new Item("img1.jpg", "商品１", 1000);
    itemList.add(item1);

    // 2つ目（変数に値を入れず直接インスタンスを入れるパターン）
    itemList.add(new Item("img2.jpg", "商品2", 5000));

    //３つ目(変数にに値を入れずに直接インスタンスを入れるパターン)
    itemList.add(new Item("img3.jpg", "  商品", 3000));
    //ソート
    Collections.sort(itemList);
    // 一覧表示
    for (Item item : itemList) {
      System.out.println("====================");
      System.out.println(item.getImageFileName());
      System.out.println(item.getName());
      System.out.println(item.getPrice() + "円");
    }
  }
}
