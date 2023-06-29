const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const elements = event.currentTarget.elements;

    const mail = elements.email.value;
    const password = elements.password.value;

    if (mail === '' || password === '') {
        return console.log('Все поля должны быть заполнены!');
    }

    const value = {
        mail,
        password,
    };

    console.log(value);
    event.currentTarget.reset();
}
