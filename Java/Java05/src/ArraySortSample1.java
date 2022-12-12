import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class ArraySortSample1 {
    public static void main(String[] args){
        List<Integer> list = new ArrayList<>();

        list.add(7);
        list.add(9);
        list.add(4);

        System.out.println("ソート前");
        for(int num : list ){
            System.out.println(num);
        }
        Collections.sort(list);
        System.out.println("ソート後");
        for(int num : list ){
            System.out.println(num);
        }
    }
}
