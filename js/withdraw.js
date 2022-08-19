/*
        1.   add event handlar/listener with the withdraw button
        2.   get the withdraw amount from the withdraw input field
        2.5. also make sure to convert the input into a number by isung pasreFloat.
        3.   get previous withdraw total
        4.   calculate the withdraw Amount
        4-5. set the total withdraw amount
        5.   get the previous balance total
        6.   calculate the new balance total  
        6-5. set the new balance total

 */
//step-1:
document.getElementById('btn-withdraw').addEventListener('click', function () {
    //step - 2
    const withdrawFeild = document.getElementById('withdraw-field');
    const newWithdrawAmountstring = withdrawFeild.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountstring)
    //step -7.
    withdrawFeild.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('Please Provide a number')
        return;
    }


    //step 3
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalstring = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalstring);

    //step- 5.
    const balanceTotalElement = document.getElementById('Balance-total');
    const previousBalanceTotalElementString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalElementString);

    //step -7.
    withdrawFeild.value = '';

    if (newWithdrawAmount > previousBalanceTotal) {
        alert('tor baper bank e eto taka nai')
        return;
    }

    //step - 4
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // step -6
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal









})