//Sentence, assumptions, etc. are in the HTML file

let donutCount = 6; // change to 12 for part 2
let varieties = ['A', 'B', 'C']; // add letters for 21 varieties
let combinationArray = [];
display("Count is: " + findCombinations(donutCount, varieties, 0, combinationArray));

function display(input) {
    console.log(input + "\n")
}
function findCombinations(items, options, position, combinations) {
    /**
     * Formula for combinations with repetitions is (n + r - 1)! / (n - 1)! * r!
     * n = varieties and r = donuts
     * For n = 3 and r = 6, we get 8! / 2! * 6! = 28
     * For n = 3 and r = 12, we expect 91.
     * Outputs for both are at the bottom.
     * For n = 7 and r = 12, we expect 18564. I ran this one and got 1000 lines of output.
     *                                        I don't think anyone wants me to copy&paste them.
     * Finally, for n = 21 and r = 12, we expect 225,792,840.
     */
    let combinationCount = 0;
    if (combinations.length === items) {
        display(combinations.join(" "));
        return 1;
    }
    for (let i = position; i < options.length; ++i) {
        combinations.push(options[i]); 
        combinationCount += findCombinations(items, options, i, combinations);
        combinations.pop();
    }
    return combinationCount;
} 

/**
 * For n = 3 and r = 6:
 * A A A A A A
 * A A A A A B
 * A A A A A C
 * A A A A B B
 * A A A A B C
 * A A A A C C
 * A A A B B B
 * A A A B B C
 * A A A B C C
 * A A A C C C
 * A A B B B B
 * A A B B B C
 * A A B B C C
 * A A B C C C
 * A A C C C C
 * A B B B B B
 * A B B B B C
 * A B B B C C
 * A B B C C C
 * A B C C C C
 * A C C C C C
 * B B B B B B
 * B B B B B C
 * B B B B C C
 * B B B C C C
 * B B C C C C
 * B C C C C C
 * C C C C C C
 * Count is: 28

 * For n = 3 and r = 12:
 * A A A A A A A A A A A A
 * A A A A A A A A A A A B
 * A A A A A A A A A A A C
 * A A A A A A A A A A B B
 * A A A A A A A A A A B C
 * A A A A A A A A A A C C
 * A A A A A A A A A B B B
 * A A A A A A A A A B B C
 * A A A A A A A A A B C C
 * A A A A A A A A A C C C
 * A A A A A A A A B B B B
 * A A A A A A A A B B B C
 * A A A A A A A A B B C C
 * A A A A A A A A B C C C
 * A A A A A A A A C C C C
 * A A A A A A A B B B B B
 * A A A A A A A B B B B C
 * A A A A A A A B B B C C
 * A A A A A A A B B C C C
 * A A A A A A A B C C C C
 * A A A A A A A C C C C C
 * A A A A A A B B B B B B
 * A A A A A A B B B B B C
 * A A A A A A B B B B C C
 * A A A A A A B B B C C C
 * A A A A A A B B C C C C
 * A A A A A A B C C C C C
 * A A A A A A C C C C C C
 * A A A A A B B B B B B B
 * A A A A A B B B B B B C
 * A A A A A B B B B B C C
 * A A A A A B B B B C C C
 * A A A A A B B B C C C C
 * A A A A A B B C C C C C
 * A A A A A B C C C C C C
 * A A A A A C C C C C C C
 * A A A A B B B B B B B B
 * A A A A B B B B B B B C
 * A A A A B B B B B B C C
 * A A A A B B B B B C C C
 * A A A A B B B B C C C C
 * A A A A B B B C C C C C
 * A A A A B B C C C C C C
 * A A A A B C C C C C C C
 * A A A A C C C C C C C C
 * A A A B B B B B B B B B
 * A A A B B B B B B B B C
 * A A A B B B B B B B C C
 * A A A B B B B B B C C C
 * A A A B B B B B C C C C
 * A A A B B B B C C C C C
 * A A A B B B C C C C C C
 * A A A B B C C C C C C C
 * A A A B C C C C C C C C
 * A A A C C C C C C C C C
 * A A B B B B B B B B B B
 * A A B B B B B B B B B C
 * A A B B B B B B B B C C
 * A A B B B B B B B C C C
 * A A B B B B B B C C C C
 * A A B B B B B C C C C C
 * A A B B B B C C C C C C
 * A A B B B C C C C C C C
 * A A B B C C C C C C C C
 * A A B C C C C C C C C C
 * A A C C C C C C C C C C
 * A B B B B B B B B B B B
 * A B B B B B B B B B B C
 * A B B B B B B B B B C C
 * A B B B B B B B B C C C
 * A B B B B B B B C C C C
 * A B B B B B B C C C C C
 * A B B B B B C C C C C C
 * A B B B B C C C C C C C
 * A B B B C C C C C C C C
 * A B B C C C C C C C C C
 * A B C C C C C C C C C C
 * A C C C C C C C C C C C
 * B B B B B B B B B B B B
 * B B B B B B B B B B B C
 * B B B B B B B B B B C C
 * B B B B B B B B B C C C
 * B B B B B B B B C C C C
 * B B B B B B B C C C C C
 * B B B B B B C C C C C C
 * B B B B B C C C C C C C
 * B B B B C C C C C C C C
 * B B B C C C C C C C C C
 * B B C C C C C C C C C C
 * B C C C C C C C C C C C
 * C C C C C C C C C C C C
 * Count is: 91
 */