import java.util.HashMap;

public class MapExample2 {
  public static void main(String[] args) {
      HashMap<String,Integer> map = new HashMap<>();

      map.put("みかん",100);
      map.put("りんご",250);
      map.put("なし",160);

      for(String key : map.keySet() ) {
        int price = map.get(key);
        System.out.println(key+"は"+price+"円です");
      }
  }
}