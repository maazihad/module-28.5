function getInputFieldValuesById(inputId) {
   const newDeposit = document.getElementById(inputId);
   const newDepositValue = parseFloat(newDeposit.value);
   newDeposit.value = '';
   return newDepositValue;
}
function getTextElementValuesById(elementValue) {
   const prevDeposit = document.getElementById(elementValue);
   const preDepositValue = parseFloat(prevDeposit.innerText);
   return preDepositValue;
}
function setTextElementsValuesById(elementText, newValue) {
   const element = document.getElementById(elementText);
   element.innerText = newValue;
}