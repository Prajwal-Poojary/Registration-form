function formValidation() {
    var userid = document.registration.userid;
    var passid = document.registration.passid;
    var username = document.registration.username;
    var address = document.registration.address;
    var country = document.registration.country;
    var zip = document.registration.zip;
    var email = document.registration.email;
    var msex = document.registration.msex;
    var fsex = document.registration.fsex;
    var en = document.registration.en;
    var nonen = document.registration.nonen;

    if (validateUserId(userid, 5, 12)) {
        if (validatePassword(passid, 7, 12)) {
            if (validateName(username)) {
                if (validateAddress(address)) {
                    if (validateCountry(country)) {
                        if (validateZip(zip)) {
                            if (validateEmail(email)) {
                                if (validateGender(msex, fsex)) {
                                    if (validateLanguage(en, nonen)) {
                                        // All validations passed, form is valid
                                        return true;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    // If any validation fails, prevent form submission
    return false;
}

function validateUserId(userid, min, max) {
    var uidLength = userid.value.length;
    if (uidLength == 0 || uidLength >= max || uidLength < min) {
        alert("User Id should not be empty / length be between " + min + " to " + max);
        userid.focus();
        return false;
    }
    return true;
}

function validatePassword(passid, min, max) {
    var passidLength = passid.value.length;
    if (passidLength == 0 || passidLength >= max || passidLength < min) {
        alert("Password should not be empty / length be between " + min + " to " + max);
        passid.focus();
        return false;
    }
    return true;
}

function validateName(username) {
    if (username.value.length == 0) {
        alert("Name should not be empty");
        username.focus();
        return false;
    }
    return true;
}

function validateAddress(address) {
    if (address.value.length == 0) {
        alert("Address should not be empty");
        address.focus();
        return false;
    }
    return true;
}

function validateCountry(country) {
    if (country.value == "Default") {
        alert("Select your country from the list");
        country.focus();
        return false;
    }
    return true;
}

function validateZip(zip) {
    var zipPattern = /^\d{6}$/;
    if (!zipPattern.test(zip.value)) {
        alert("ZIP Code should be a 6-digit number");
        zip.focus();
        return false;
    }
    return true;
}

function validateEmail(email) {
    var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!emailPattern.test(email.value)) {
        alert("Enter a valid email address");
        email.focus();
        return false;
    }
    return true;
}

function validateGender(msex, fsex) {
    if (!(msex.checked || fsex.checked)) {
        alert("Select Male or Female");
        return false;
    }
    return true;
}

function validateLanguage(en, nonen) {
    if (!(en.checked || nonen.checked)) {
        alert("Select at least one language");
        return false;
    }
    return true;
}


