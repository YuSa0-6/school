import java.util.ArrayList;

public class ArrayListExample2 {
    
    public static void main(String[] args) {
        //newの後のダイヤモンド演算子は省略可能
        ArrayList<Integer> agelist = new ArrayList<>();
        ArrayList<String> namelist = new ArrayList<>();

        namelist.add("西野先生");
        namelist.add("久家先生");
        agelist.add(30);
        agelist.add(31);

        for (String name : namelist) {
            System.out.println(name);
        }
        System.out.println("それぞれの年齢は、、、、");
        for (Integer age : agelist) {
            System.out.println(age);
        }
    }
}
