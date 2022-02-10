//Finally remembered deferring in HTML so that I don't
//have to have the DOMContentLoaded listener.

//declaring some variables so that I don't have to keep selecting elements
const totalButton = document.querySelector("#random-total")
var totalHTML = document.querySelector("#charge")
const paymentBox = document.querySelector("#payment-value")
const paymentButton = document.querySelector("#random-payment")
const calculateButton = document.querySelector("#calculate")
var lincoln = document.querySelector("#penny")
var pennyCount = document.querySelector("#penny-count")
var jefferson = document.querySelector("#nickel")
var nickelCount = document.querySelector("#nickel-count")
var fdr = document.querySelector("#dime")
var dimeCount = document.querySelector("#dime-count")
var washington = document.querySelector("#quarter")
var quarterCount = document.querySelector("#quarter-count")
var dollarBill = document.querySelector("#dollar")
var dollarCount = document.querySelector("#dollar-count")
var fiveBill = document.querySelector("#five")
var fiveCount = document.querySelector("#five-count")
var jackson = document.querySelector("#twenty")
var twentyCount = document.querySelector("#twenty-count")
var totalLine = document.querySelector("#total")
var totalCount = document.querySelector("#total-change")

var total = 0
var payment = 0


generateTotal()
totalButton.onclick = function() {generateTotal()}
paymentButton.onclick = function() {generatePayment()}
calculateButton.onclick = function() {generateChange()}

function generateTotal() {
    clearChange()
    paymentBox.value = ""
    totalHTML.innerHTML = "Total: $"
    total = (Math.random() * 100).toFixed(2)
    totalHTML.innerHTML += total
}

function generatePayment() {
    clearChange()
    /**
     * I'm making an assumption about human nature here.
     * I would think that most people would try to pay with paper as much as possible.
     * I think that someone willing to pull out $.72, $.64, or $.33 (for example) 
     * would be more likely to pay exact change (making this program irrelevant), 
     * so the random cents will only end in 0 or 5.
     * I'm also going to try to keep the paper amount realistic.
     * 
     * The program will randomly decide what kind of number to generate.
     */
    
    let roundedPayment = Math.ceil(total)
    let approach = Math.floor(Math.random() * 3);
    let payment = 0

    if (approach == 0) { //keep it simple, stupid
        payment = roundedPayment
    }
    else if (approach == 1) { //keep it realistic
        let tens = Math.floor(total / 10)
        let ones = Math.floor(total % 10)
        let bills = tens * 10 + ones
        let coins = ((total - bills).toFixed(2))*100
        let change = 0

        while (payment < bills) {
            payment+= 5
        }
        if (ones == 5 || ones == 0) {
            if (coins > 75) {
                change = 1
            }
            else if (coins > 50) {
                change = .75
            }
            else if (coins > 25) {
                change = .50
            }
            else if (coins > 0) {
                change = .25
            }
        }
        payment+= change
    }
    else { //get crazy
        payment = (Math.random() * 75 + roundedPayment).toFixed(2)
        if (payment > 100) {
            payment = (100) //max charge is 100
        }
    }
    paymentBox.value = (+payment).toFixed(2)

}

var twenties = 0
var fives = 0
var ones = 0
var quarters = 0
var dimes = 0
var nickels = 0
var pennies = 0
var cashBack = 0

function generateChange() {
    clearChange()
    payment = paymentBox.value
    let difference = (payment - total).toFixed(2)
    cashBack = difference
    let currency = [20, 5, 1, .25, .10, .05, .01]
    let totals = [0, 0, 0, 0, 0, 0, 0]


    for (let i = 0; i < 7; i++) {
        let count= 0;
        while((+difference).toFixed(2) >= currency[i]) {
            difference-= currency[i]
            count++
        }
     totals[i] = count
    }

    twenties = totals[0]
    fives = totals[1]
    ones = totals[2]
    quarters = totals[3]
    dimes = totals[4]
    nickels = totals[5]
    pennies = totals[6]

    
    showChange()
    }
function clearChange() {
    lincoln.style.display = "none"
    pennyCount.innerHTML = "x"
    jefferson.style.display = "none"
    nickelCount.innerHTML= "x"
    fdr.style.display = "none"
    dimeCount.innerHTML = "x"
    washington.style.display = "none"
    quarterCount.innerHTML = "x"
    washington.style.display = "none"
    quarterCount.innerHTML = "x"
    dollarBill.style.display = "none"
    dollarCount.innerHTML= "x"
    fiveBill.style.display = "none"
    fiveCount.innerHTML = "x"
    jackson.style.display = "none"
    twentyCount.innerHTML = "x"
    totalLine.style.display = "none"
    totalCount.innerHTML = "$"
}

function showChange() {
    clearChange()

    if (pennies > 0) {
        lincoln.style.display = "flex"
        pennyCount.innerHTML+= pennies
    }
    if (nickels > 0) {
        jefferson.style.display = "flex"
        nickelCount.innerHTML+= nickels
    }
    if (dimes > 0) {
        fdr.style.display = "flex"
        dimeCount.innerHTML+= dimes
    }
    if (quarters > 0) {
        washington.style.display = "flex"
        quarterCount.innerHTML+= quarters
    }
    if (ones > 0) {
        dollarBill.style.display = "flex"
        dollarCount.innerHTML+= ones
    }
    if (fives > 0) {
        fiveBill.style.display = "flex"
        fiveCount.innerHTML+= fives
    }
    if (twenties > 0) {
        jackson.style.display = "flex"
        twentyCount.innerHTML+= twenties
    }
    totalLine.style.display = "flex"
    totalCount.innerHTML+= cashBack

}
