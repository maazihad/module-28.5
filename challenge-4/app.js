// Textarea project

function getTextareaValueById(textareaId) {
   const getTextarea = document.getElementById(textareaId);
   return getTextarea;

};

document.getElementById('bold').addEventListener('click', function () {
   const changeValue = getTextareaValueById('textArea-box');
   changeValue.style.fontWeight = 'bold';

});
document.getElementById('italic').addEventListener('click', function () {
   const changeValue = getTextareaValueById('textArea-box');
   changeValue.style.fontStyle = 'italic';

});
document.getElementById('underline').addEventListener('click', function () {
   const changeValue = getTextareaValueById('textArea-box');
   changeValue.style.textDecoration = 'underline';

});
document.getElementById('left-align').addEventListener('click', function () {
   const changeValue = getTextareaValueById('textArea-box');
   changeValue.style.textAlign = 'left';

});
document.getElementById('right-align').addEventListener('click', function () {
   const changeValue = getTextareaValueById('textArea-box');
   changeValue.style.textAlign = 'right';

});
document.getElementById('center-align').addEventListener('click', function () {
   const changeValue = getTextareaValueById('textArea-box');
   changeValue.style.textAlign = 'center';

});
document.getElementById('justify-align').addEventListener('click', function () {
   const changeValue = getTextareaValueById('textArea-box');
   changeValue.style.textAlign = 'justify';

});
document.getElementById('font-case').addEventListener('click', function () {
   const changeValue = getTextareaValueById('textArea-box');
   changeValue.style.textTransform = "uppercase";

});
document.getElementById('color-palate').addEventListener('click', function (e) {
   const changeValue = getTextareaValueById('textArea-box');
   changeValue.style.color = e.target.value;

});






















/* 
function getElementId(id) {
   const element = document.getElementById(id);
   return element;
}

document.getElementById('text-style-change').addEventListener('click', function (event) {
   const changeText = event.target.innerText;
   const getElements = getElementId('bold');
   const findtextArea = getTextareaValueById('textArea-box');
   findtextArea.value = getElements;
   const getElements2 = getElementId('italic');
   const getElements3 = getElementId('underline');
   if (changeText === getElements) {
      changeText.style.fontWeight = 'bold';
   }
   else if (changeText === getElements2) {
      changeText.style.fontStyle = 'italic';
   }
   else if (changeText === getElements3) {
      changeText.style.textDecoration = 'underline';
   }

}) */


