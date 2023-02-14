function getPrevAmount(amount) {
   const prevAmount = document.getElementById(amount);
   const prevAmountValue = parseFloat(prevAmount.innerText);
   return (prevAmountValue - ((prevAmountValue / 100) * 30)).toFixed();
}

function pleasePayQuat(disc, discAmount) {
   const findDisc = document.getElementById(disc);
   findDisc.innerText = discAmount;
}


document.getElementById('apply-button').addEventListener('click', function () {
   const discountAmount = getPrevAmount('amount');
   const setAmount = pleasePayQuat('disc-amount', discountAmount);
   return setAmount;

});