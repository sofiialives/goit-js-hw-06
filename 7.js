const inputId = document.getElementById('font-size-control');
const spanId = document.getElementById('text');
function updateFontSize(){
    const fontSize = inputId.value + 'px';
    spanId.style.fontSize = fontSize;
}
inputId.addEventListener('input', updateFontSize)