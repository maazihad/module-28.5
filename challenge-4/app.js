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



