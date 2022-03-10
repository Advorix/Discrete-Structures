/* Estimating the number of primes less than x 
 * Write a program to count how many primes are less than 10, 100, 1,000, ..., 
 * 100,000,000. Fit a curve to your data and estimate the number of primes less than x, 
 * where x is a positive integer.
 * 
 * 
 * Explanation: The prompt just asks us to write a program that can count primes up to a given number.
 * Resources: I'm going to use a few different methods, so I'll comment them with each method.
 * Assumptions: The prompt doesn't mention performance, so I'm assuming that I don't have to worry so much about that.
 * 
 * 
 * I made a graph, but it isn't that impressive since the large numbers crowd out the small ones. 
 * It is at https://github.com/Advorix/Discrete-Structures/blob/main/Exam3/Exam3_Chart.jpg.
 * I tried to make the lines look a bit separate by using opposing colors and increased transparency, but the colors just blended anyway.
*/
public class Exam3 {
    public static void main(String args[]) {
        //https://primes.utm.edu/howmany.html   has a large table for checking outputs.

        /**First method uses the Prime Number Theorem which estimates the number of primes
         * less than n. It is basically n/ln(n).
         * Resource: https://www.quantamagazine.org/mathematicians-will-never-stop-proving-the-prime-number-theorem-20200722/
         * Outputs for 10, 100, 1000, and 100,000,000 are 4, 22, 145, and 5,428,681. (Skipping the middle since it's an estimate)
        */
        int n = 100000000;
        System.out.println(Math.round(n/Math.log(n)));

        /**As you can see, it isn't that accurate, especially with larger numbers.
         * From the following resource from Khan Academy, the theorem can get more accurate 
         * by subtracting 1 from the denominator.
         * Source: https://www.khanacademy.org/computer-programming/level-6-the-prime-number-theorem/1120046961
         * Outputs: 8, 28, 169, and 5,740,304
         * This benefits larger numbers more than small numbers, though.
         */
        n = 100000000; 
        System.out.println(Math.round(n/(Math.log(n) - 1)));


        /**This method is the standard brute-force method for counting primes.
         * The catch is that it takes a very long time with large numbers. 
         * Outputs for 10^1 - 10^8: 4, 25, 168, 1229, 9592, 78498, ...
         * It should work past the given outputs, but I didn't want to wait that long.
         */
        n = 1_000_000;
        int count = 0;
        for (int i = 2; i < n; i++) {
            if(isPrime(i)) {
                count++;
            }
        }
        System.out.println("Number of primes is: " + count);



        /**If you Google efficient ways to find primes, you'll see several approaches.
         * The Sieve of Eratosthenes is one of the popular ways to do it.
         * Resource: Daniel Liang Java Textbook, pp. 859-860.
         * You basically set up a boolean array with indices from 0 - n and set everything to true.
         * Next, you take each number between 2 and n/2 (inclusive), multiply them by each index less than n/2, 
         * and set the results to false.
         * For example, 2 * 2 = set index 4 to false, 2 * 3 = 6 is false, 2*4 = 8 is false . . .
         * Outputs (skipping previous): 664579, 5761455
         *
         */

        n = 100_000_000;
        boolean[] primes = new boolean[n + 1];

        //initialize
        for (int i = 0; i < primes.length; i++) {
            primes[i] = true;
        }
        //main work
        for (int i = 2; i <= n / i; i++) {
            if(primes[i]) {
                for (int j = 2; j <= n / i; j++) {
                    primes[i * j] = false;
                }
            }
        }
        //count
        count = 0;
        for (int i = 2; i < primes.length; i++) {
            if(primes[i]) {
                count++;
            }
        }
        System.out.println("Number of primes: " + count);
        
        
    }
    public static boolean isPrime(int x) {
        for (int i = 2; i <= x / 2; i++) {
            if (x % i == 0) {
                return false;
            }
        }
        return true;

    }
}