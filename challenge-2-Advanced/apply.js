function getInputValueById(inputId) {
   const input = document.getElementById(inputId);
   const inputValue = input.value;
   input.value = '';
   return inputValue;
};
function getTextElementAmount(amount) {
   const amounts = document.getElementById(amount);
   const amountValue = parseFloat(amounts.innerText);
   return (amountValue - (amountValue / 100) * 30);
}

function setTextElementValue(setId, newDiscValue) {
   const findId = document.getElementById(setId);
   findId.innerText = newDiscValue;
}

document.getElementById('apply-button').addEventListener('click', function () {

   const getInput = getInputValueById('coupon-id');
   const getElementValue = getTextElementAmount('amount-id');

   if (getInput === 'DISC30') {
      setTextElementValue('disc-amount', getElementValue);
   }
   else {
      alert("You input a wring coupon id. Please write true coupon Id.");
   }

});