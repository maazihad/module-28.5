document.getElementById('deposit-button').addEventListener('click', function () {
   const newDepositAmount = getInputFieldValuesById('deposit-field');
   const prevDepositAmount = getTextElementValuesById('total-deposit');
   const totalDepositAmount = newDepositAmount + prevDepositAmount;

   setTextElementsValuesById('total-deposit', totalDepositAmount);

   const prevBalance = getTextElementValuesById('total-balance');
   const totalBalance = newDepositAmount + prevBalance;
   setTextElementsValuesById('total-balance', totalBalance);
});