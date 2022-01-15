const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', onFormSubmit);


function onFormSubmit(event) {
    event.preventDefault();

    if (event.currentTarget.elements.email.value === "" || event.currentTarget.elements.password.value === "") {
        alert("Bсе поля должны быть заполнены!");
    } else {
        const mail = event.currentTarget.elements.email.value;
        const password = event.currentTarget.elements.password.value;
        const formData = {mail, password}
        
        console.log(formData);
        reset();
    }

    function reset() {
        event.currentTarget.elements.email.value = "";
        event.currentTarget.elements.password.value = "";
    } 
}