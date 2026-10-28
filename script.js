const annualIncome = document.getElementById('annualIncome');
const calculateTotalButton = document.getElementById('calculateTotalBtn');
const totalMessage = document.getElementById('annualIncomeMessage');
const totalBorrowing = document.getElementById('totalBorrowing');


calculateTotalButton.addEventListener("click", function() {
    const yearlyIncome = Number(annualIncome.value);
    if (yearlyIncome <= 0) {
        totalBorrowing.textContent = "Please enter a value greater than 0";
        return;
    }
    const firstTimeBuyer = document.getElementById('firstTime');
    const secondTimeBuyer = document.getElementById('secondTime');

    let multiplier;

    if (firstTimeBuyer.checked) {
    multiplier = 4;
    } else if (secondTimeBuyer.checked) {
    multiplier = 3.5;
    }

    const annualCalculatedIncome = yearlyIncome * multiplier;
    totalBorrowing.textContent =`Your calculated max lend is ${annualCalculatedIncome}`;

})