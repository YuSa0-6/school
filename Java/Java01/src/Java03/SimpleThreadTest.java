package Java03;

class MyThread extends Thread {
    public void run() {
        for (int i = 0; i < 100; i++) {
            System.out.println("MyThread in run method(" + i + ")");
        }
    }
}

public class SimpleThreadTest {
    public static void main(String[] args) {
        MyThread t = new MyThread();
        t.start();
        for (int i = 0; i < 100; i++) {
            System.out.println("SimpleThreadTest in main method(" + i + ")");
        }
    }
}