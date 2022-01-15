const refs = {
    input: document.querySelector('#font-size-control'),
    textToChange: document.querySelector('#text'),
}

refs.input.addEventListener('input', onChangeFontSize);

function onChangeFontSize(event) {
    refs.textToChange.setAttribute('style', `font-size:${event.currentTarget.value}px`)
}