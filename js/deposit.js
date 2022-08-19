//step.1-- add event listener to the Deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    //step.2--get the deposit amount from the deposit input field
    //fpr input field use .value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountstring = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountstring);

    // step.3--get the current deposit total
    //for non input (element other than input,textarea)use inner text to get the text.
    const dipositTotalElement = document.getElementById('deposit-total');
    const previousDipositTotalString = dipositTotalElement.innerText;
    const previousDipositTotal = parseFloat(previousDipositTotalString);
    //step.4 -- add number to set the total deposit
    const currentDipositTotal = previousDipositTotal + newDepositAmount;
    
    //set the deposit total
    dipositTotalElement.innerText = currentDipositTotal

    //step.5--get balance current total 
    const balanceTotalElement = document.getElementById('Balance-total');
    const previousBalanceTotalElementString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalElementString)

    //step.6--calculate Balance total
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount
    //set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;







    //step.7--- clear the Depodsit feild
    depositField.value = '';

})