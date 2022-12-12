class MyThread implements Runnable {
    public void run() {
        for (int i = 0; i < 100; i++) {
            System.out.println("MyThread in runMethod(" + i + ")");
        }
    }
}

public class SimpleThreadTest2 {
    public static void main(String[] args) {
        MyThread t = new MyThread();
        Thread thread = new Thread(t);
        thread.start();

        for (int i = 0; i < 100; i++) {
            System.out.println("SimpleThread2 in MainMethod(" + i + ")");
        }
    }
}