//========================================
//           Numeric Calculator
//========================================
const cal_display = document.getElementById('num_display');
let expression = '';

function appendToDisplay(value) {
    expression += value;
    cal_display.innerText = expression;
}

function clearDisplay() {
    expression = '';
    cal_display.innerText = '';
}

function delDisplay() {
    expression = expression.slice(0, -1); // Remove last character from expression
    cal_display.innerText = expression;
}

function calculate() {
    try {
        let result = eval(expression);
        if (isNaN(result) || !isFinite(result)) {
            throw new Error('Invalid expression');
        }
        expression = result.toString();
        cal_display.innerText = result;
    } catch (error) {
        expression = '';
        cal_display.innerText = 'Error';
    }
}   

//=========================================
//        Interest Calculation 
//=========================================

const principalText = document.getElementById('print_principal');
const rateText = document.getElementById('print_rate');
const totalText = document.getElementById('print_total');
const int_form = document.getElementById('interestForm');

int_form.addEventListener('submit', calculateInterest);

function calculateInterest(event) {
    event.preventDefault();

    const principal = parseFloat(int_form.principal.value);
    const rate = parseFloat(int_form.rate.value);
    const period = parseFloat(int_form.period.value);
    const periodType = document.getElementById('int-select').value;

    if (isNaN(principal) || isNaN(rate) || isNaN(period) || principal <= 0 || rate <= 0 || period <= 0) {
        alert('Please enter valid principal, rate, and period!');
        return;
    }

    let interest;
    if (periodType === 'year') {
        interest = (principal * rate * (period)) / 100;
    } else if(periodType === 'month'){
        interest = (principal * rate * period ) / 100;
    }

    const total = principal + interest;

    principalText.textContent = principal.toFixed(2);
    rateText.textContent = interest.toFixed(2);
    totalText.textContent = total.toFixed(2);
}

//=========================================
//      Compund interest calculator
//=========================================
const compPrincipalText = document.getElementById('comp_print_principal');
const compRateText = document.getElementById('comp_print_rate');
const compTotalText = document.getElementById('comp_print_total');
const compIntForm = document.getElementById('compinterestForm');

compIntForm.addEventListener('submit', calculateCompoundInterest);

function calculateCompoundInterest(event) {
    event.preventDefault();

    const compPrincipal = parseFloat(compIntForm.comp_principal.value);
    const compRate = parseFloat(compIntForm.comp_rate.value);
    const compTimesInterestApplied = compIntForm.comp_select.value;
    const compPeriod = parseFloat(compIntForm.comp_period2.value);
    const compPeriodType = document.getElementById('comp_select2').value;

    if (isNaN(compPrincipal) || isNaN(compRate) || isNaN(compPeriod) || compPrincipal <= 0 || compRate <= 0 || compPeriod <= 0) {
        alert('Please enter valid principal, rate, and period!');
        return;
    }

    let n;
    switch (compTimesInterestApplied) {
        case 'daily':
            n = compPeriod * 365;
            break;
        case 'weekly':
            n = compPeriod * 52;
            break;
        case 'monthly':
            n = compPeriod * 12;
            break;
        case 'yearly':
            n = compPeriod;
            break;
        default:
            alert('Invalid compounding frequency!');
            return;
    }

    let r;
    if (compPeriodType === 'month') {
        r = compRate / 1200; // convert percentage to decimal and monthly rate
    } else {
        r = compRate / 100; // yearly rate
    }

    const amount = compPrincipal * Math.pow(1 + r, n); // compound interest formula

    const totalInterest = amount - compPrincipal;

    compPrincipalText.textContent = compPrincipal.toFixed(2);
    compRateText.textContent = totalInterest.toFixed(2);
    compTotalText.textContent = amount.toFixed(2);
}
//=========================================
//        Percentage Calculator
//=========================================
// Form 1
const percForm1 = document.getElementById('perc_form');
const percentageOut1 = document.getElementById('percentage_out1');

percForm1.addEventListener('submit', calculatePercentage1);

function calculatePercentage1(event) {
    event.preventDefault();

    const percValue = parseFloat(document.getElementById('perc_value').value);
    const percPerc = parseFloat(document.getElementById('perc_perc').value);

    if (isNaN(percValue) || isNaN(percPerc)) {
        alert('Please enter valid numbers!');
        return;
    }

    const result = (percPerc / 100) * percValue;
    percentageOut1.textContent = result.toFixed(2);
}

// Form 2
const percForm2 = document.getElementById('perc_form2');
const percentageOut2 = document.getElementById('percentage_out2');

percForm2.addEventListener('submit', calculatePercentage2);

function calculatePercentage2(event) {
    event.preventDefault();

    const percValue2 = parseFloat(document.getElementById('perc_value2').value);
    const percPerc2 = parseFloat(document.getElementById('perc_perc2').value);

    if (isNaN(percValue2) || isNaN(percPerc2)) {
        alert('Please enter valid numbers!');
        return;
    }

    const result = (percValue2 / percPerc2) * 100;
    percentageOut2.textContent = result.toFixed(2) + '%';
}
//=========================================
//      Area Calcaulator
//=========================================
const areaForm1 = document.getElementById('area_form1');
const areaForm2 = document.getElementById('area_form2');
const areaForm3 = document.getElementById('area_form3');
const areaOut1 = document.getElementById('area_out1');
const areaOut2 = document.getElementById('area_out2');
const areaOut3 = document.getElementById('area_out3');

areaForm1.addEventListener('submit', calculateRectangleArea);
areaForm2.addEventListener('submit', calculateTriangleArea);
areaForm3.addEventListener('submit', calculateCircleArea);

function calculateRectangleArea(e) {
    e.preventDefault();

    const length = parseFloat(areaForm1.area_value1.value);
    const width = parseFloat(areaForm1.area_area1_1.value);

    if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
        alert('Please enter valid length and width!');
        return;
    }

    const area = length * width;
    areaOut1.textContent = area.toFixed(2) + ' cm²';
}

function calculateTriangleArea(e) {
    e.preventDefault();

    const edge1 = parseFloat(areaForm2.area_value2.value);
    const edge2 = parseFloat(areaForm2.area_area2_2.value);
    const edge3 = parseFloat(areaForm2.area_area2_3.value);

    if (isNaN(edge1) || isNaN(edge2) || isNaN(edge3) || edge1 <= 0 || edge2 <= 0 || edge3 <= 0) {
        alert('Please enter valid values for all edges!');
        return;
    }

    const s = (edge1 + edge2 + edge3) / 2;
    const area = Math.sqrt(s * (s - edge1) * (s - edge2) * (s - edge3));
    areaOut2.textContent = area.toFixed(2) + ' cm²';
}

function calculateCircleArea(e) {
    e.preventDefault();

    const radius = parseFloat(areaForm3.area_value3.value);

    if (isNaN(radius) || radius <= 0) {
        alert('Please enter valid radius!');
        return;
    }

    const area = Math.PI * radius * radius;
    areaOut3.textContent = area.toFixed(2) + ' cm²';
}

//=========================================
//             Unit Convertor
//=========================================
// cm to
const unit_form = document.getElementById('unitForm');
const input = document.getElementById('unit_cm');
const select = document.getElementById('unit_select');
const output = document.getElementById('unit_out1');

unit_form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputValue = parseFloat(input.value);
    const selectedUnit = select.value;
    const result = convertUnit1(inputValue, selectedUnit);

    output.textContent = `${result.toFixed(4)} ${selectedUnit}`;
});

function convertUnit1(value, unit) {
    switch (unit) {
        case 'meter(s)':
            return value / 100;
        case 'kilometer(s)':
            return value / 100000;
        case 'mile(s)':
            return value / 160934;
        case 'inch(es)':
            return value * 0.393701;
        case 'feet':
            return value * 0.0328084;
        case 'yard(s)':
            return value * 0.0109361;
        default:
            return value;
    }
}

// m to
const unit_form2 = document.getElementById('unitForm2');
const input2 = document.getElementById('unit_m');
const select2 = document.getElementById('unit_select2');
const output2 = document.getElementById('unit_out2');

unit_form2.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputValue2 = parseFloat(input2.value);
    const selectedUnit2 = select2.value;
    const result2 = convertUnit2(inputValue2, selectedUnit2);

    output2.textContent = `${result2.toFixed(4)} ${selectedUnit2}`;
});

function convertUnit2(value, unit) {
    switch (unit) {
        case 'centimeter(s)':
            return value * 100;
        case 'kilometer(s)':
            return value / 1000;
        case 'mile(s)':
            return value / 1609.344;
        case 'inch(es)':
            return value * 3.28;
        case 'feet':
            return value * 3.28084;
        case 'yard(s)':
            return value *  1.0936;
        default:
            return value;
    }
}

//km to 
const unitForm = document.getElementById('unitForm3');
const input3 = document.getElementById('unit_k');
const select3 = document.getElementById('unit_select3');
const output3 = document.getElementById('unit_out3');

unitForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputValue3 = parseFloat(input3.value);
    const selectedUnit3 = select3.value;
    const result3 = convertUnit3(inputValue3, selectedUnit3);

    output3.textContent = `${result3.toFixed(4)} ${selectedUnit3}`;
});

function convertUnit3(value, unit) {
    switch (unit) {
        case 'centimeter(s)':
            return value * 100000; 
        case 'meter(s)':
            return value * 1000; 
        case 'mile(s)':
            return value * 0.621371; 
        case 'inch(es)':
            return value * 39370.1; 
        case 'feet':
            return value * 3280.84; 
        case 'yard(s)':
            return value * 1093.61; 
        default:
            return value;
    }
}

//mile to
const unitForm4 = document.getElementById('unitForm4');
const input4 = document.getElementById('unit_mi');
const select4 = document.getElementById('unit_select4');
const output4 = document.getElementById('unit_out4');

unitForm4.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputValue4 = parseFloat(input4.value);
    const selectedUnit4 = select4.value;
    const result4 = convertUnit4(inputValue4, selectedUnit4);

    output4.textContent = `${result4.toFixed(4)} ${selectedUnit4}`;
});

function convertUnit4(value, unit) {
    switch (unit) {
        case 'centimeter(s)':
            return value * 160934; 
        case 'meter(s)':
            return value * 1609.34; 
        case 'kilometer(s)':
            return value * 1.60934; 
        case 'inch(es)':
            return value * 63360; 
        case 'feet':
            return value * 5280; 
        case 'yard(s)':
            return value * 1760; 
        default:
            return value;
    }
}

//inches to
const unitForm5 = document.getElementById('unitForm5');
const input5 = document.getElementById('unit_inch');
const select5 = document.getElementById('unit_select5');
const output5 = document.getElementById('unit_out5');

unitForm5.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputValue5 = parseFloat(input5.value);
    const selectedUnit5 = select5.value;
    const result5 = convertUnit5(inputValue5, selectedUnit5);

    output5.textContent = `${result5.toFixed(4)} ${selectedUnit5}`;
});

function convertUnit5(value, unit) {
    switch (unit) {
        case 'centimeter(s)':
            return value * 2.54; 
        case 'meter(s)':
            return value * 0.0254; 
        case 'kilometer(s)':
            return value * 0.0000254; 
        case 'mile(s)':
            return value * 0.0000158; 
        case 'feet':
            return value * 0.0833333; 
        case 'yard(s)':
            return value * 0.0277778; 
        default:
            return value;
    }
}

//feet to
const unitForm6 = document.getElementById('unitForm6');
const input6 = document.getElementById('unit_ft');
const select6 = document.getElementById('unit_select6');
const output6 = document.getElementById('unit_out6');

unitForm6.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputValue6 = parseFloat(input6.value);
    const selectedUnit6 = select6.value;
    const result6 = convertUnit6(inputValue6, selectedUnit6);

    output6.textContent = `${result6.toFixed(4)} ${selectedUnit6}`;
});

function convertUnit6(value, unit) {
    switch (unit) {
        case 'centimeter(s)':
            return value * 30.48; // 1 foot = 30.48 centimeters
        case 'meter(s)':
            return value * 0.3048; // 1 foot = 0.3048 meters
        case 'kilometer(s)':
            return value * 0.0003048; // 1 foot = 0.0003048 kilometers
        case 'mile(s)':
            return value * 0.000189394; // 1 foot = 0.000189394 miles
        case 'inch(es)':
            return value * 12; // 1 foot = 12 inches
        case 'yard(s)':
            return value * 0.333333; // 1 foot = 0.333333 yards
        default:
            return value;
    }
}

//Yards to
const unitForm7 = document.getElementById('unitForm7');
const input7 = document.getElementById('unit_y');
const select7 = document.getElementById('unit_select7');
const output7 = document.getElementById('unit_out7');

unitForm7.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputValue7 = parseFloat(input7.value);
    const selectedUnit7 = select7.value;
    const result7 = convertUnit7(inputValue7, selectedUnit7);

    output7.textContent = `${result7.toFixed(4)} ${selectedUnit7}`;
});

function convertUnit7(value, unit) {
    switch (unit) {
        case 'centimeter(s)':
            return value * 91.44; 
        case 'meter(s)':
            return value * 0.9144; 
        case 'mile(s)':
            return value * 0.000568182; 
        case 'inch(es)':
            return value * 36; 
        case 'feet':
            return value * 3; 
        case 'yard(s)':
            return value; 
        default:
            return value;
    }
}

//=========================================
//    BMI Calculation and validation
//=========================================

const bmiText = document.getElementById('bmi');
const resultText = document.getElementById('result');
const form = document.getElementById('bmi_form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();

    const weight = parseFloat(form.weight.value);
    const height = parseFloat(form.height.value);

    if(isNaN(weight) || isNaN(height) || weight <= 0 || height <=0){
        alert('Please enter valid weight and height!');
        return;
    }

    const heightInMeters = height / 100; //cm -> m
    const bmi = weight / (heightInMeters * heightInMeters);
    bmiText.textContent = bmi.toFixed(3);
    resultText.innerHTML = `You are <strong>${interpretBMI(bmi)}</strong>`;
}

function interpretBMI(bmi){
    if(bmi < 18.5){
        return 'underweight.';
    }
    else if(bmi < 25){
        return 'normal.';
    }
    else if(bmi < 30){
        return 'overweight.';
    }
    else{
        return 'obese.'
    }
}
