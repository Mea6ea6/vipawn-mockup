document.addEventListener('DOMContentLoaded', () => {
    const logInBtn = document.querySelector('.navbar__sign-btn_log-in');
    const signUpBtn = document.querySelector('.navbar__sign-btn_reg-in');
    const signContainer = document.querySelector('.sign');
    const logInForm = document.querySelector('.sign-in');
    const signUpForm = document.querySelector('.sign-up');
    const hintBtn = document.querySelector('.sign__hint-btn');

    const showPopup = (form) => {
        signContainer.classList.add('sign_active');
        form.classList.add('sign_active');
    };

    const hidePopups = () => {
        signContainer.classList.remove('sign_active');
        logInForm.classList.remove('sign_active');
        signUpForm.classList.remove('sign_active');
    };

    logInBtn.addEventListener('click', () => {
        hidePopups();
        showPopup(logInForm);
    });

    signUpBtn.addEventListener('click', () => {
        hidePopups();
        showPopup(signUpForm);
    });

    hintBtn.addEventListener('click', () => {
        logInForm.classList.remove('sign_active');
        showPopup(signUpForm);
    });

    signContainer.addEventListener('click', (event) => {
        if (event.target === signContainer) {
            hidePopups();
        }
    });
});
