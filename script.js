// Total lending about based on declared annual income
const firstTimeBuyer = document.getElementById('firstTime');
const secondTimeBuyer = document.getElementById('secondTime');
const annualIncome = document.getElementById('annualIncome');
const calculateTotalButton = document.getElementById('calculateTotalBtn');
const depositMessage = document.getElementById('depositMessage');
const totalBorrowing = document.getElementById('totalBorrowing');
const irishBank = document.getElementById('irishBank');
const interestRate = document.getElementById('interestRate');
const termLength = document.getElementById('termLength');
const mortgageDetails = document.getElementById('mortgageDetails');
const calculatePaymentsButton = document.getElementById('calculatePaymentsBtn');
const monthlyPayments = document.getElementById('monthlyPayments');
const paymentsMessage = document.getElementById('monthlyPaymentsMessage');
const mortgageChecklist = document.getElementById('mortgageChecklist');
const bankLogo = document.getElementById('bankLogo');
const bankWebsite = document.getElementById('bankWebsite');
const bankInfoBox = document.getElementById('bankInfoBox');
const bankInfoTitle = document.getElementById('bankInfoTitle');
const bankInfoText = document.getElementById('bankInfoText');
const calculatorImg = document.querySelector('.calculatorHeroImg');
// let used to allow calculation from first fuction to be used in subsequent functions
let annualCalculatedIncome = 0;


// Calculation 1 - Total Borrowing potental based on FTB/STB & annual income

calculateTotalButton.addEventListener("click", function() {
    const yearlyIncome = Number(annualIncome.value);
    
    let multiplier;

    annualCalculatedIncome = 0;
    totalBorrowing.textContent = '';
    monthlyPayments.textContent = '';
    mortgageChecklist.hidden = true;

    if (firstTimeBuyer.checked) {
        multiplier = 4;
    } else if (secondTimeBuyer.checked) {
        multiplier = 3.5;
    } else {
        totalBorrowing.textContent = "Please select if first or second time buyer";
        mortgageDetails.hidden = true
        return;
    }
    if (yearlyIncome < 25000) {
        totalBorrowing.textContent = "Please enter income value greater or equal to €25,000";
        mortgageDetails.hidden = true
        return;
    }


    annualCalculatedIncome = yearlyIncome * multiplier;
    totalBorrowing.textContent =`Your estimated maximum borrowing is €${annualCalculatedIncome.toLocaleString('en-IE')}`;
    depositCalculation = Math.round(((annualCalculatedIncome/90)*100)-annualCalculatedIncome);
    depositMessage.textContent =`Total deposit required is €${depositCalculation.toLocaleString('en-IE')}`; 

    mortgageDetails.hidden = false;

})

annualIncome.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        calculateTotalButton.click();
    }
});


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

const bankLogos = {
    boi: "images/boi_logo3.png",
    aib: "images/aib_logo.png",
    ptsb: "images/ptsb_logo.png",
    ebs: "images/ebs_logo.jpg",
}

const bankWebsites = {
    boi: "https://personalbanking.bankofireland.com/borrow/mortgages/",
    aib: "https://www.aib.ie/our-products/mortgages",
    ptsb: "https://www.ptsb.ie/mortgages/",
    ebs: "https://www.ebs.ie/mortgages?gclsrc=aw.ds&gad_source=1&gad_campaignid=20516309685&gbraid=0AAAAADty9XYaMKql52JUdL4p1n7FF2v2E&gclid=Cj0KCQiA5NXXBhDEARIsABAJhdK3ZWCITwgo3g_uepHzj8zKgkW40JxZwxHrGMYoXHWcvU3HY7onvL4aAj6DEALw_wcB"
}

const bankBlurbs = {
    boi: {
        title: "Bank of Ireland",
        text: "Best suited if you want upfront cash incentives and repayment flexibility over the lowest headline rate. BOI offers up to 3% cashback (2% at drawdown and 1% at year five), a €2,000 MortgageSaver bonus for first-time buyers, and a 3-month deferred start option. While standard cashback rates (3.80%–4.20% above) roll onto a higher Standard Variable Rate (around 4.15%), buying an energy-efficient home (BER A3+) with a 10% deposit unlocks lower EcoSaver green fixed rates. Weigh the immediate cashback lump sum against your monthly repayments above."
    },
    aib: {
        title: "AIB",
        text: "Best suited if you want sharp fixed interest rates without relying on cashback offers. AIB competes directly on lower monthly repayments across a wide range of fixed terms (1 to 10 years, 3.50%–4.20% above), alongside even lower Green Fixed Rates (for BER A0–B / A1–B3 homes) and High Value 4-Year Fixed options for larger loans. You will typically see lower monthly outgoings here—especially if you are buying a newer, energy-efficient home or borrowing a larger sum."
    },
    ptsb: {
        title: "PTSB (Permanent TSB)",
        text: "Best suited if you want a middle-ground balance between competitive rates and ongoing cash rewards. PTSB offers 2% cashback at drawdown alongside 2% monthly cashback on mortgage repayments through 2030 when paid from an Explore Current Account (€8 monthly fee). While their lowest non-cashback 4-Year Fixed rate excludes the 2% lump sum, PTSB’s standard fixed rates (3.95%–4.40% above) and Green rates remain eligible for both perks. Factor both the upfront 2% lump sum and monthly rebate against your calculated repayments."
    },
    ebs: {
        title: "EBS",
        text: "Best suited if you want face-to-face branch support paired with a simple either/or product choice. EBS splits its lineup into upfront cash or a low flat rate: pick 3% Back in Cash (2% within two months of drawdown and 1% at year five on 2-, 3-, or 5-year fixed rates from 3.90%–4.40%), or opt for their 3.20% Green 4-Year Fixed Rate (for qualifying BER A0–B / A1–B3 properties across all deposit sizes, excluding the 3% cashback). Use the dropdown above to test whether the flat 3.20% green rate saves you more per month than the 3% cash lump sum."
    }
};

const bankHeroImages = {
    boi: "images/boi_house.jpg",
    aib: "images/aib_house.jpg",
    ptsb: "images/ptsb_house.jpg",
    ebs: "images/ebs_house.webp"
};


irishBank.addEventListener('change', function() {

    const selectedBank = irishBank.value;

    if (selectedBank === "") {
        bankLogo.style.display = "none";
        bankWebsite.href = "#";
        bankInfoBox.hidden = true;
    } else {
        bankLogo.src = bankLogos[selectedBank];
        bankLogo.style.display = "block";
        bankWebsite.href = bankWebsites[selectedBank];
        bankInfoTitle.textContent = bankBlurbs[selectedBank].title;
        bankInfoText.textContent = bankBlurbs[selectedBank].text;
        bankInfoBox.hidden = false;
    }

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

    if (selectedBank === "") {
        calculatorImg.src = "images/your-image.webp";
    } else if (bankHeroImages[selectedBank]) {
        calculatorImg.src = bankHeroImages[selectedBank];
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

    if (termLength.value === '' || mortgageTerm < 5 || mortgageTerm > 35) {         
        monthlyPayments.textContent = "Please enter a mortgage term between 5 and 35 years";         
        return;     
    }

    const monthlyRate = selectedRate / 100 / 12;
    const numberOfPayments = mortgageTerm * 12;
    const totalMonthlyRate = 1 + monthlyRate;
    const rateByTerm = Math.pow(totalMonthlyRate, numberOfPayments);
    const upperRate = monthlyRate * rateByTerm;
    const loanRate = annualCalculatedIncome * upperRate;
    const lowerRate = rateByTerm - 1;
    const monthlyRepayments = Number((loanRate/lowerRate).toFixed(2));     

    monthlyPayments.textContent =`Your monthly Repayments would be €${monthlyRepayments.toLocaleString('en-IE')}`;

    mortgageChecklist.hidden = false

})

termLength.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        calculatePaymentsButton.click();
    }
});