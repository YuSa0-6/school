import java.util.ArrayList;

public class ArrayListExample {
    public static void main(String[] args) {

        //ダイヤモンド演算子<>の中にデータのクラスを指定する。
        ArrayList<String> months = new ArrayList<String>();

        
        months.add("January");
        months.add("February");
        months.add("March");

        //display list
        System.out.println("要素数" + months.size());
        for (int i = 0; i < months.size(); i++) {
            System.out.println(months.get(i));
        }

        months.remove(1);

        //display list
        System.out.println("要素数" + months.size());
        for (int i = 0; i < months.size(); i++) {
            System.out.println(months.get(i));
        }
    }
}
