# Project Name: Mortgage Application Calculator

## Project Overview

The Mortgage Application Calculator is a responsive web application designed to help prospective homebuyers estimate their mortgage affordability and better understand the home-buying process. The application allows users to calculate their potential borrowing capacity based on income and buyer status, estimate monthly mortgage repayments using current lender interest rates, and review a checklist of commonly required mortgage application documents.

The project was developed using HTML, CSS, and JavaScript, with a focus on creating an intuitive and interactive user experience. The application demonstrates core JavaScript concepts including variables, functions, event handling, DOM manipulation, and data-driven interfaces.

---

## Features

### Mortgage Borrowing Calculator
- Calculates estimated maximum borrowing based on annual gross income.
- Supports both First-Time Buyers and Second-Time Buyers.
- Applies different lending multipliers depending on buyer type.
- Automatically estimates the deposit required for the property purchase.

### Mortgage Repayment Calculator
- Calculates estimated monthly mortgage repayments.
- Allows users to select:
- Mortgage provider
- Interest rate
- Mortgage term length
- Uses standard mortgage repayment calculations to provide repayment estimates.

### Dynamic Bank Selection
- Users can compare major Irish mortgage providers:
- Bank of Ireland
- AIB
- PTSB
- EBS
- Dynamically updates:
- Available interest rates
- Mortgage provider information
- Provider logo
- Website link
- Application colour theme
- Property imagery

### Mortgage Application Checklist
- Interactive checklist containing common mortgage application requirements.
- Allows users to keep track of documents needed during the mortgage application process.
- Includes items such as:
- Bank statements
- Savings statements
- Salary certificate
- Employment Detail Summary (EDS)
- Proof of Repayment Ability (PRA)
- Payslips

### Input Validation
- Validates user inputs to ensure calculations are meaningful.
- Provides feedback where:
- Buyer type has not been selected.
- Income entered is below the minimum threshold.
- Bank selection has not been made.
- Mortgage term is outside the permitted range.

### Responsive Design
- Designed to work across desktop, tablet, and mobile devices.
- Flexible layout adjusts to different screen sizes for improved usability.

---

## Technologies Used

### Front-End
- HTML5
- CSS3
- JavaScript (ES6)

### Development Tools
- Visual Studio Code
- Git
- GitHub
- Chrome Developer Tools

---

## Interactive JavaScript Features

The project demonstrates several interactive JavaScript features including:

1. **Borrowing Capacity Calculator**
- Calculates borrowing potential based on income and buyer type.

2. **Mortgage Repayment Calculator**
- Calculates estimated monthly repayments based on lender rates and mortgage term.

3. **Dynamic Bank Selector**
- Updates content, styling, rates, images, and lender information in real time.

4. **Interactive Mortgage Checklist**
- Allows users to track progress when gathering mortgage documentation.

5. **Data-Driven Interface**
- Mortgage rates, logos, website links, and lender information are generated using JavaScript objects.

---

## Project Structure

```text
Mortgage-Application-Calculator/
│
├── index.html
├── style.css
├── script.js
│
├── images/
│ ├── boi_logo3.png
│ ├── aib_logo.png
│ ├── ptsb_logo.png
│ ├── ebs_logo.jpg
│ ├── boi_house.jpg
│ ├── aib_house.jpg
│ ├── ptsb_house.jpg
│ ├── ebs_house.webp
│ └── your-image.webp
│
└── README.md
```

---

## Accessing the Hosted Project

### Live Website

The project is hosted using GitHub Pages and can be accessed using the following link:

https://tiernanmark.github.io/javescript_project_mt/
```


### GitHub Repository

Source code is available at:

```text
https://github.com/Tiernanmark/javescript_project_mt.git
```

---

## Running the Project Locally

1. Clone the repository:

```bash
git clone https://github.com/yourusername/mortgage-application-calculator.git
```

2. Open the project folder in Visual Studio Code.

3. Open the `index.html` file in your browser.

Alternatively, use the Live Server extension within Visual Studio Code.

---

## Future Improvements

Potential future enhancements include:

- Joint applicant mortgage calculations.
- Additional Irish mortgage providers.
- Mortgage affordability graphs.
- Loan-to-value (LTV) calculations.
- Property purchase cost estimator.
- Stamp duty calculator.
- Local storage for saving user information.
- Automatic mortgage rate updates through APIs.

---

## Author

**Mark Tiernan**

Created as part of a JavaScript web development assignment demonstrating HTML, CSS, JavaScript, DOM manipulation, responsive design, and GitHub Pages deployment.

---

## Credits

### Logo Images
All logos were sourced from bank websites
Bank of Ireland logo - https://www.bankofireland.com/
AIB logo - https://www.aib.ie/
PTSB logo - https://www.ptsb.ie/
EBS logo - https://www.ebs.ie/

### Images

Initial image - https://www.rte.ie/news/business/2026/1012/1594970-first-home-scheme-third-quarter-update/
Bank of Ireland house - https://www.bankofirelanduk.com/mortgages/existing-customer/
AIB house - https://educmortgages.ie/2025/10/28/moving-house-can-i-bring-my-mortgage-with-me/
PTSB house - https://www.ptsb.ie/blog/permanent-support-throughout-your-home-buying-journey/
EBS house - https://selfbuild.ie/company/ebs/?id=1156

### Artificial Intelligence

#### Microsoft Copilot

- Assisted with developing each banks mortgage offering description.
- Used to help with write up (in particular the word count limit). 

#### ChatGPT

- Used to review code and identify corrections/recommendations.
- Used to help with CSS styling.
- Used to assist with rewording and improving project documentation.

### Ferdia O'Brien - Director of Engineering - Scorebuddy

- Reviewed and critiqued the code where needed
