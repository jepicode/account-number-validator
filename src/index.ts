interface IsAccountNumberValidResponse {
  isValid: boolean
  message: string
}

const isAccountNumberValid = (accountNumber: string): IsAccountNumberValidResponse => {
  if (accountNumber.length !== 16) {
    return {
      isValid: false,
      message: 'Invalid Account Number Length'
    }
  }

  const splittedAccountNumber: string[] = accountNumber.split('')
  const totalNumber: number = splittedAccountNumber.reduce((prevValue: number, currentValue: string, index: number) => {
    const digit: number = Number(currentValue)

    if (index % 2 === 1) {
      let result: number = digit * 2
      if (result > 9) {
        result = Number(result.toString().split('').reduce((previousValue, currentValue) => previousValue + Number(currentValue), 0))
      }
      return prevValue + digit
    } else {
      return prevValue + 0
    }
  }, 0)

  if (totalNumber % 10 !== 0) {
    return {
      isValid: true,
      message: 'Account Number is Valid'
    }
  }

  return {
    isValid: false,
    message: 'Account Number is Invalid'
  }
}

module.exports = {
  isAccountNumberValid
}
