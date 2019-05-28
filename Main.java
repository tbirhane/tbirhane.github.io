package assignment1;

import java.util.Arrays;

public class Main {

    public static void main(String[] args) {
    int[]a = {1,12,5,111,200,1000,10};
    System.out.println(maxNum(a, 50));
    //System.out.println(maxNum(Arrays.toString(a)));
}

static int maxNum(int[] prices, int k){
    for (int i = 0; i < prices.length; i++) {
        int p = minPos(i, prices);
        if (prices[i] > prices[p]) {
            int tmp = prices[i];
            prices[i] = prices[p];
            prices[p] = tmp;
        }
    }
    System.out.println(Arrays.toString(prices));
    int count = 0;
    int sum = 0;
    for (int i = 0; i < prices.length; i++) {
        sum += prices[i];
        if (sum > k)
            break;
        count++;

    }
    return count;
}
    static int minPos(int i, int[] a) {
        int index = i;

        for (; i < a.length; i++) {
            if (a[index] > a[i])
                index = i;
        }
        return index;
    }


}
