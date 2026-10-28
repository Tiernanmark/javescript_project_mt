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

    const annualCalculatedIncome = yearlyIncome * 4;
    totalBorrowing.textContent =`Your calculated max lend is ${annualCalculatedIncome}`;

})