const pswrdInput = document.querySelector('input#password') as HTMLInputElement;
const confPswrdInput = document.querySelector('input#confirm-password') as HTMLInputElement;
const errorDisplay = document.querySelector('p.error-msg');

const checkIfPaswordsMatch = () => {
    if (pswrdInput.value !== confPswrdInput.value || pswrdInput.value === "" || confPswrdInput.value === "") {
        pswrdInput.classList.add('invalid');
        confPswrdInput.classList.add('invalid');
        if (errorDisplay) {
            errorDisplay.textContent = "Passwords do not match"
        };
    } else {
        pswrdInput.classList.remove('invalid');
        confPswrdInput.classList.remove('invalid');
        if (errorDisplay) {
            errorDisplay.textContent = ""
        };
    }
}

[pswrdInput, confPswrdInput].forEach(input => input?.addEventListener("input", checkIfPaswordsMatch))