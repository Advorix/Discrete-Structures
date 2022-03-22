public class Exam4 {
	public static void main(String[] args) {
		
		/**
		 * 
		 * *I pasted the outputs I got under the print loops for each method.
		 * 
		 * Sentence: The problem just wants us to keep track of a few different operations
		 * for the recursive and iterative methods for finding Fibonacci numbers.
		 * 
		 * Resources: Dr. Evert's video for more precise instructions/requirements
		 * 
		 * Assumptions: The hard part will be catching everything important (operation wise).
		 * 				Using a class for the counter will probably be the only (good) option.
		 * 				Using nanoTime() will be more precise.
		 * 
		 * Justification: It wouldn't surprise me if I missed an operation or two, but I think I caught the majority of them.
		 */
		
		Counter recursion = new Counter();
		Counter iterative = new Counter();
		
		System.out.println("Stats for Recursive:");
		for (int n = 0; n < 11; n++) {
			recursion.startTimer();
			int fib = recursiveFibonacci(n, recursion);
			recursion.endTimer();
			System.out.println("Fibonacci number at " + n + " is " + fib);
			System.out.println("\tIf count: " + recursion.getIfStatements());
			System.out.println("\tSimple Math count: " + recursion.getSimpleMath());
			System.out.println("\tElapsed Time in nanoseconds: " + recursion.getElapsedTime());
			System.out.println();
			recursion.setIfStatements(0); //reset counters for more accurate read for each number
			recursion.setSimpleMath(0);
		}
		/**
		 * Output:
		 * Stats for Recursive:
			Fibonacci number at 0 is 0
				If count: 1
				Simple Math count: 0
				Elapsed Time in nanoseconds: 2999
			
			Fibonacci number at 1 is 1
				If count: 1
				Simple Math count: 0
				Elapsed Time in nanoseconds: 400
			
			Fibonacci number at 2 is 1
				If count: 3
				Simple Math count: 3
				Elapsed Time in nanoseconds: 1699
			
			Fibonacci number at 3 is 2
				If count: 5
				Simple Math count: 6
				Elapsed Time in nanoseconds: 700
			
			Fibonacci number at 4 is 3
				If count: 9
				Simple Math count: 12
				Elapsed Time in nanoseconds: 899
			
			Fibonacci number at 5 is 5
				If count: 15
				Simple Math count: 21
				Elapsed Time in nanoseconds: 1200
			
			Fibonacci number at 6 is 8
				If count: 25
				Simple Math count: 36
				Elapsed Time in nanoseconds: 1901
			
			Fibonacci number at 7 is 13
				If count: 41
				Simple Math count: 60
				Elapsed Time in nanoseconds: 2600
			
			Fibonacci number at 8 is 21
				If count: 67
				Simple Math count: 99
				Elapsed Time in nanoseconds: 4700
			
			Fibonacci number at 9 is 34
				If count: 109
				Simple Math count: 162
				Elapsed Time in nanoseconds: 8400
			
			Fibonacci number at 10 is 55
				If count: 177
				Simple Math count: 264
				Elapsed Time in nanoseconds: 12900
		 */
		
		System.out.println("Stats for Iterative: ");
		for (int n = 0; n < 11; n++) {
			iterative.startTimer();
			int fib = iterativeFibonacci(n, iterative);
			iterative.endTimer();
			System.out.println("Fibonacci number at " + n + " is " + fib);
			System.out.println("\tAssignment Count: " + iterative.getAssignments());
			System.out.println("\tIf Count: " + iterative.getIfStatements());
			System.out.println("\tSimple Math Count: " + iterative.getSimpleMath());
			System.out.println("\tElapsed Time in nanoseconds: " + iterative.getElapsedTime());
			System.out.println();
			iterative.setAssignments(0); 
			iterative.setIfStatements(0);
			iterative.setSimpleMath(0);
		}
	}
	public static int recursiveFibonacci(int n, Counter recursion) {
		if (n <= 1) {
			recursion.incrementIfStatements();
			return n;
		}
		else {
			recursion.incrementIfStatements(); //count "failed" if tests since the comparison was still made
			recursion.incrementSimpleMath(3); //next line has 3 add/subtract
			return recursiveFibonacci((n - 1), recursion) + recursiveFibonacci((n-2), recursion);
		}
	}
	public static int iterativeFibonacci(int n, Counter iterative) {
		if (n <= 1) {
			iterative.incrementIfStatements();
			return n;
		}
		iterative.incrementIfStatements(); // keep track of the failed comparison
		int current = 1;
		int previous = 1;
		iterative.incrementAssignments(2);
		
		for (int i = 2; i < n; i++) {
			iterative.incrementAssignments(1);
			iterative.incrementIfStatements();
			iterative.incrementSimpleMath(1); //add 1 to i each time through the loop
			int temp = current;
			current += previous;
			previous = temp;
			iterative.incrementAssignments(3);
			iterative.incrementSimpleMath(1);
		}
		iterative.incrementIfStatements(); //comparison is required to stop loop
		return current;
		/**
		 * Output:
		 * Stats for Iterative: 
			Fibonacci number at 0 is 0
				Assignment Count: 0
				If Count: 1
				Simple Math Count: 0
				Elapsed Time in nanoseconds: 1400
			
			Fibonacci number at 1 is 1
				Assignment Count: 0
				If Count: 1
				Simple Math Count: 0
				Elapsed Time in nanoseconds: 400
			
			Fibonacci number at 2 is 1
				Assignment Count: 2
				If Count: 2
				Simple Math Count: 0
				Elapsed Time in nanoseconds: 1600
			
			Fibonacci number at 3 is 2
				Assignment Count: 6
				If Count: 3
				Simple Math Count: 2
				Elapsed Time in nanoseconds: 800
			
			Fibonacci number at 4 is 3
				Assignment Count: 10
				If Count: 4
				Simple Math Count: 4
				Elapsed Time in nanoseconds: 900
			
			Fibonacci number at 5 is 5
				Assignment Count: 14
				If Count: 5
				Simple Math Count: 6
				Elapsed Time in nanoseconds: 1000
			
			Fibonacci number at 6 is 8
				Assignment Count: 18
				If Count: 6
				Simple Math Count: 8
				Elapsed Time in nanoseconds: 1100
			
			Fibonacci number at 7 is 13
				Assignment Count: 22
				If Count: 7
				Simple Math Count: 10
				Elapsed Time in nanoseconds: 1199
			
			Fibonacci number at 8 is 21
				Assignment Count: 26
				If Count: 8
				Simple Math Count: 12
				Elapsed Time in nanoseconds: 1400
			
			Fibonacci number at 9 is 34
				Assignment Count: 30
				If Count: 9
				Simple Math Count: 14
				Elapsed Time in nanoseconds: 1500
			
			Fibonacci number at 10 is 55
				Assignment Count: 34
				If Count: 10
				Simple Math Count: 16
				Elapsed Time in nanoseconds: 1600
		 */
	}
	
}
class Counter {
	private int numberOfIfStatements;
	private int numberOfSimpleMath;
	private long startTime;
	private long endTime;
	private int numberOfAssignments;
	
	public int getIfStatements() {
		return numberOfIfStatements;
	}
	public void incrementIfStatements() {
		numberOfIfStatements++;
	}
	public void setIfStatements(int count) {
		numberOfIfStatements = count;
	}
	public int getSimpleMath() {
		return numberOfSimpleMath;
	}
	public void incrementSimpleMath(int count) {
		numberOfSimpleMath+= count; 
	}
	public void setSimpleMath(int count) {
		numberOfSimpleMath = count;
	}
	public void startTimer() {
		startTime = System.nanoTime();
	}
	public void endTimer() {
		endTime = System.nanoTime();
	}
	public long getElapsedTime() {
		return endTime - startTime;
	}
	public int getAssignments() {
		return numberOfAssignments;
	}
	public void incrementAssignments(int count) {
		numberOfAssignments += count;
	}
	public void setAssignments(int count) {
		numberOfAssignments = count;
	}
	
}
