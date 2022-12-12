import java.util.HashMap;

public class MapExample {
    public static void main(String[] args) throws Exception {
        HashMap<String,String> map = new HashMap<String, String>();

        map.put("first name", "太郎");
        map.put("last name", "山田");
        map.put("address", "茨木つくば市");
        map.put("tel", "000-1111-2222");

        System.out.println(map.entrySet());
        System.out.println(map.values());
        System.out.println(map.keySet());
        System.out.println(map.get("first name"));
        System.out.println(map.get("last name"));
        System.out.println(map.get("address"));
        System.out.println(map.get("tel"));
        System.out.println(map.get("e-mail"));
    }
}
