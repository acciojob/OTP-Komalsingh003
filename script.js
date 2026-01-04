//your JS code here. If required.
const codes = document.querySelectorAll('.code');
// Focus first input 
codes[0].focus();
codes.forEach((code, index) => {
 code.addEventListener('keydown', (e) => {
// Allow only digits and backspace
if (e.key >= '0' && e.key <= '9') {
 code.value = '';
 } else if (e.key !== 'Backspace') {
 e.preventDefault();
}
});
code.addEventListener('input', () => {
if (code.value && index < codes.length - 1) {
 codes[index + 1].focus();
}
});
code.addEventListener('keydown', (e) => {
if (e.key === 'Backspace') {
 if (code.value === '' && index > 0) {
   codes[index - 1].focus();
    codes[index - 1].value = '';
}
 }
  });
});
