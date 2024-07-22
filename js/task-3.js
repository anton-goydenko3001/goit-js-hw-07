const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');

textInput.addEventListener('input', () => {
    const valueFromInput = textInput.value.trim();

    textOutput.textContent = valueFromInput === '' ? 'Anonymous' : valueFromInput;
});
