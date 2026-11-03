// Total lending about based on declared annual income

const annualIncome = document.getElementById('annualIncome');
const calculateTotalButton = document.getElementById('calculateTotalBtn');
const totalMessage = document.getElementById('annualIncomeMessage');
const totalBorrowing = document.getElementById('totalBorrowing');
const irishBank = document.getElementById('irishBank');
const interestRate = document.getElementById('interestRate');



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




// Creation of rate dropdown selections based on bank choosen



const bankRates = {
    boi: {
        5: 3,
        10: 5,
        15: 7,
        20: 10,
    },
    aib: {
        5: 3,
        10: 5,
        15: 7,
        20: 10,
    },
    ptsb: {
        5: 3,
        10: 5,
        15: 7,
        20: 10,
    },
    ebs: {
        5: 3,
        10: 5,
        15: 7,
        20: 10,
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

