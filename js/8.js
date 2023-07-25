const formClass = document.querySelector('.login-form');

function handleSubmit(event){
    event.preventDefault();
    const {
    elements: {email, password}} = event.currentTarget;

    if(email.value === '' || password.value === ''){
        alert("Всі поля повинні бути заповнені")
        return
    } 
const codeInfo = {Email: email.value, Password: password.value}

    console.log(codeInfo);
    event.currentTarget.reset(); 
}
formClass.addEventListener("submit", handleSubmit);