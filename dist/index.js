"use strict";
const isAccountNumberValid = (accountNumber) => {
    if (accountNumber.length !== 16) {
        return {
            isValid: false,
            message: 'Invalid Account Number Length'
        };
    }
    const splittedAccountNumber = accountNumber.split('');
    const totalNumber = splittedAccountNumber.reduce((prevValue, currentValue, index) => {
        const digit = Number(currentValue);
        if (index % 2 === 1) {
            let result = digit * 2;
            if (result > 9) {
                result = Number(result.toString().split('').reduce((previousValue, currentValue) => previousValue + Number(currentValue), 0));
            }
            return prevValue + digit;
        }
        else {
            return prevValue + 0;
        }
    }, 0);
    if (totalNumber % 10 !== 0) {
        return {
            isValid: true,
            message: 'Account Number is Valid'
        };
    }
    return {
        isValid: false,
        message: 'Account Number is Invalid'
    };
};
module.exports = {
    isAccountNumberValid
};
