var pswrdInput = document.querySelector('input#password');
var confPswrdInput = document.querySelector('input#confirm-password');
var errorDisplay = document.querySelector('p.error-msg');
var checkIfPaswordsMatch = function () {
    if (pswrdInput.value !== confPswrdInput.value || pswrdInput.value === "" || confPswrdInput.value === "") {
        pswrdInput.classList.add('invalid');
        confPswrdInput.classList.add('invalid');
        if (errorDisplay) {
            errorDisplay.textContent = "Passwords do not match";
        }
        ;
    }
    else {
        pswrdInput.classList.remove('invalid');
        confPswrdInput.classList.remove('invalid');
        if (errorDisplay) {
            errorDisplay.textContent = "";
        }
        ;
    }
};
[pswrdInput, confPswrdInput].forEach(function (input) { return input === null || input === void 0 ? void 0 : input.addEventListener("input", checkIfPaswordsMatch); });
