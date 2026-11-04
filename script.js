// Total lending about based on declared annual income
const firstTimeBuyer = document.getElementById('firstTime');
const secondTimeBuyer = document.getElementById('secondTime');
const annualIncome = document.getElementById('annualIncome');
const calculateTotalButton = document.getElementById('calculateTotalBtn');
const totalMessage = document.getElementById('annualIncomeMessage');
const totalBorrowing = document.getElementById('totalBorrowing');
const irishBank = document.getElementById('irishBank');
const interestRate = document.getElementById('interestRate');
const termLength = document.getElementById('termLength');
const mortgageDetails = document.getElementById('mortgageDetails');
const calculatePaymentsButton = document.getElementById('calculatePaymentsBtn');
const monthlyPayments = document.getElementById('monthlyPayments');
const paymentsMessage = document.getElementById('monthlyPaymentsMessage');
// let used to allow calculation from first fuction to be used in subsequent functions
let annualCalculatedIncome = 0;


// Calculation 1 - Total Borrowing potental based on FTB/STB & annual income

calculateTotalButton.addEventListener("click", function() {
    const yearlyIncome = Number(annualIncome.value);
    
    let multiplier;

    if (firstTimeBuyer.checked) {
    multiplier = 4;
    } else if (secondTimeBuyer.checked) {
    multiplier = 3.5;
    } else {
        totalBorrowing.textContent = "Please select if first or second time buyer";
        return;
    }
    if (yearlyIncome <= 0) {
        totalBorrowing.textContent = "Please enter an income value greater than 0";
        return;
    }


    

    annualCalculatedIncome = yearlyIncome * multiplier;
    totalBorrowing.textContent =`Your calculated max lend is ${annualCalculatedIncome}`;

    mortgageDetails.hidden = false;

})


// Creation of rate dropdown selections based on bank choosen


const bankRates = {
    boi: {
        3.80: 2,
        3.90: 3,
        3.90: 5,
        4.20: 10,
    },
    aib: {
        3.50: 1,
        3.55: 2,
        3.70: 3,
        3.75: 4,
        3.85: 5,
        4.05: 7,
        4.20: 10,
    },
    ptsb: {
        4.40: 2,
        4.25: 3,
        4.10: 5,
        3.95: 7,
    },
    ebs: {
        3.90: 2,
        4.30: 3,
        3.20: 4,
        4.40: 5,
    }
}

irishBank.addEventListener('change', function() {

    const selectedBank = irishBank.value;

    document.body.classList.remove(
        'boi-theme',
        'aib-theme',
        'ptsb-theme',
        'ebs-theme'
    );

    if (selectedBank !== '') {
        document.body.classList.add(selectedBank + '-theme');
    }

    interestRate.innerHTML = '';

    if(selectedBank === '') {
        interestRate.disabled = true;
        interestRate.innerHTML = '<option value="">Awaiting bank Selction</option>';
        return;
    }

    const rates = bankRates[selectedBank];

    Object.entries(rates).forEach(function([percentage, years]) {
        const option = document.createElement('option');

        option.value = percentage;
        option.textContent = percentage + '% - ' + years + ' Years';

        interestRate.appendChild(option);
    });

    interestRate.disabled = false;


})

// Calculation 2 - Total Monthly repayments based off of Calculation 1, rate & term lenght.


calculatePaymentsButton.addEventListener("click", function() {
    const mortgageTerm = Number(termLength.value);
    const selectedRate = Number(interestRate.value);

    if (irishBank.value === "" ) {
        monthlyPayments.textContent = "Please select a Bank";
        return;
    }

    if (termLength.value === '' || mortgageTerm < 1 || mortgageTerm > 35) {         
        monthlyPayments.textContent = "Please enter a mortgage term between 0 and 35 years";         
        return;     
    }

    const monthlyRate = selectedRate / 100 / 12;
    const numberOfPayments = mortgageTerm * 12;
    const totalMonthlyRate = 1 + monthlyRate;
    const rateByTerm = Math.pow(totalMonthlyRate, numberOfPayments);
    const upperRate = monthlyRate * rateByTerm;
    const loanRate = annualCalculatedIncome * upperRate;
    const lowerRate = rateByTerm - 1;
    const monthlyRepayments = loanRate/lowerRate;     

    monthlyPayments.textContent =`Your monthly Repayments would be ${monthlyRepayments}`;

})