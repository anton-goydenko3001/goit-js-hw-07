
document.querySelector('.login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const form = event.target.elements;
    const email = form.email.value.trim();
    const password = form.password.value.trim();

    if (email === '' || password === '') {
        alert('All form fields must be filled in');
        return;
    }


const formValue = {
    email: email,
    password: password,
};

console.log(formValue)

event.target.reset();
});