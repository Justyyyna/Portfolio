// ----------------- FORMULAR-VALIDIERUNG -------------------- //


window.addEventListener('DOMContentLoaded', function () {


    var form = document.querySelector('.j-form'); //referenz auf das formular

    var isValidTel = function (tel) {

        var erlaubt = '0123456789';
        var whitespace = ' -/';
        var telClean = "";

        for (var i = 0; i < tel.length; i++) {

            if (whitespace.indexOf(tel.charAt(i)) === -1) {
                telClean += tel.charAt(i);
            }
        }
        if (telClean.length === 0) return false;

        for (var i = 0; i < telClean.length; i++) {

            if (erlaubt.indexOf(telClean.charAt(i)) === -1) {
                if (i !== 0) {
                    return false;
                } else if (telClean.charAt(i) !== '+') {
                    return false;
                }
            }
        }
        return telClean;
    };

    var isValidEmail = function (email) {
        var at_index = email.indexOf('@');
        if (at_index === -1) {
            return false;
        } else if (
            at_index === 0 ||
            at_index === email.length - 1
        ) {
            return false;
        } else if (
            email.indexOf('.', at_index + 2) === -1 ||
            email.indexOf('.', at_index) === at_index + 1
        ) {
            return false;
        } else if (email.charAt(email.length - 1) === '.') {
            return false;
        }
        return true;
    };

    form.addEventListener('submit', function (event) {


        //check names

        var errorTxt = document.querySelector('.error-txt');
        errorTxt.innerHTML = '';
        var name_fields = document.querySelectorAll('.j-name');

        for (var i = 0; i < name_fields.length; i++) {
            var field_value = name_fields[i].value;

            if (field_value.trim() === '') {
                event.preventDefault();
                errorTxt.innerHTML += '... what\'s your name?' + "<br>";
                name_fields[i].classList.add('error')
            } else {
                name_fields[i].classList.remove('error');
                errorTxt.innerHTML = '';
            }
        }

        //check mail

        var email_input = document.querySelector('.j-email');
        var email_value = email_input.value;

        if (isValidEmail(email_value)) {
            document.querySelector('.j-email').classList.remove('error');
        } else {
            document.querySelector('.j-email').classList.add('error');
            event.preventDefault();
            errorTxt.innerHTML += '... what\'s your mail? / your mail is invalid' + "<br>";
        }

        //check tel

        var tel_input = document.querySelector('.j-tel');
        var tel_value = tel_input.value;

        if (isValidTel(tel_value)) {
            tel_input.classList.remove('error');
            tel_input.value = isValidTel(tel_value);
        } else {
            tel_input.classList.add('error');
            event.preventDefault();
            errorTxt.innerHTML += '... what\'s your phone number? / your phone number is invalid' + "<br>";
        }


        //check checkbox

        var checkbox = document.querySelector('.j-checkbox-agree');
        var agreement_txt = document.querySelector('.j-agreement');

        if (checkbox.checked === false) {  // wennn die checkboxen nicht gecheckt sind
            event.preventDefault();
            agreement_txt.setAttribute("style", "color: rgb(230, 17, 17); ");
            errorTxt.innerHTML += '... you have to agree to the terms of service ' + "<br>";
        } else {
            agreement_txt.setAttribute("style", "color: black; ");
        }


        //success message

        var scrollto = errorTxt.offsetTop;

        if (errorTxt.innerHTML === "") {  // wenn im error container nichts ist
            event.preventDefault();  // nicht abschicken
            errorTxt.innerHTML += 'you have successfully created your booking.' + "<br>" + 'you will receive a confirmation email shortly! ;)';
            errorTxt.setAttribute('style', 'color: green;')
            window.scrollTo(0, scrollto);
            form.removeChild(document.querySelector('.j-subBtn'));

        } else {
            window.scrollTo(0, scrollto);
        }
    });
});