package Java03;

class MyThread implements Runnable {
    public void run() {
        for (int i = 0; i < 100; i++) {
            System.out.println("MyThread in run method(" + i + ")");
        }
    }
}

public class SimpleThreadTest2 {
    public static void main(String[] args) {
        MyThread t = new MyThread();
        Thread thread = new Thread();
        thread.start();

        for (int i = 0; i < 100; i++) {
            System.out.println("SimpleThreadTest2 in main Method(" + i + ")");
        }
    }
}
