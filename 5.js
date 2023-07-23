const inputText = document.getElementById('name-input');
const outputText = document.getElementById('name-output');
function updateOutput(){
    const name = inputText.value;
    if(name === ''){
        outputText.textContent = "Anonymous";
    } else{
        outputText.textContent = name;
    }
}
inputText.addEventListener('input', updateOutput);