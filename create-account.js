function createAccount(pin, amount = 0) {
    let accountBalance = amount;
    let storedPin = pin;

    return {
      checkBalance: function (inputPin) {
        if (inputPin === storedPin) {
          return `Current balance: $${accountBalance}.`;
        } else {
          return "Invalid PIN.";
        }
      },

      deposit: function (inputPin, depositAmount) {
        if (inputPin === storedPin) {
          accountBalance += depositAmount;
          return `Successfully deposited $${depositAmount}. Current balance: $${accountBalance}.`;
        } else {
          return "Invalid PIN.";
        }
      },

      withdraw: function (inputPin, withdrawalAmount) {
        if (inputPin === storedPin) {
          if (withdrawalAmount > accountBalance) {
            return "Withdrawal amount exceeds account balance. Transaction cancelled.";
          } else {
            accountBalance -= withdrawalAmount;
            return `Successfully withdrew $${withdrawalAmount}. Current balance: $${accountBalance}.`;
          }
        } else {
          return "Invalid PIN.";
        }
      },

      changePin: function (oldPin, newPin) {
        if (oldPin === storedPin) {
          storedPin = newPin;
          return "PIN successfully changed!";
        } else {
          return "Invalid PIN.";
        }
      }
    };
  }


module.exports = { createAccount };
