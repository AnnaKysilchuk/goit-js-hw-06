const refs = {
    input: document.querySelector('#name-input'),
    outputName: document.querySelector('#name-output'),
}

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (event.currentTarget.value !== "") {
        refs.outputName.textContent = event.currentTarget.value;
    } else {
        refs.outputName.textContent = "Anonymous"
    };
}