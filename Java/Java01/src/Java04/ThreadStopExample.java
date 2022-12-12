package Java04;

class MyThread extends Thread {
    public void run() {
        for (int i = 0; i < 100; i++) {
            System.out.println("MyThreadのrunメゾッド(" + i + ")");
        }
    }
}

public class ThreadStopExample {
    public static void main(String[] args) {
        MyThread t = new MyThread();
        t.start();

        for (int i = 0; i < 100; i++) {
            System.out.println("SimpleThreadTest in mainMethod(" + i + ")");
        }
    }
}
