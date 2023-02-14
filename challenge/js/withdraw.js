document.getElementById('withdraw-button').addEventListener("click", function () {

   const newWithdraw = getInputFieldValuesById('withdraw-filed');
   const prevWithdraw = getTextElementValuesById('total-withdraw');
   const totalWithdraw = newWithdraw + prevWithdraw;

   setTextElementsValuesById('total-withdraw', totalWithdraw);

   const prevBalance = getTextElementValuesById('total-balance');
   const totalBalance = prevBalance - newWithdraw;
   setTextElementsValuesById('total-balance', totalBalance);

});