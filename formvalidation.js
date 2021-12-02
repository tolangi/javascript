function validFname() {
    let first_name = document.getElementById('firstname').value
    if (first_name == "") {
        displayMsg('firstname is requred ', 'fnameMsg', 'red')
        return false
    }
    else if (first_name.length < 3) {
        displayMsg('firstname must be more then 2 characters', 'fnameMsg', 'red')
        return false
    }
    else if (!first_name.match(/^([a-zA-Z])+$/))
        displayMsg(`firstname only accepts alphabates`, 'fnameMsg', 'red')

    else {
        displayMsg('valid firstname ', 'fnameMsg', 'green')
        return true
    }
}

function validLname() {
    let last_name = document.getElementById('lastname').value
    if (last_name == "") {
        displayMsg('lastname is requred', 'lnameMsg', 'red')
        return false
    }
    else if (last_name.length < 3) {
        displayMsg('lastname must be more then 2 characters', 'lnameMsg', 'red')
        return false
    }
    else if (!last_name.match(/^([a-zA-Z])+$/))
        displayMsg(`lastname only accepts alphabates`, 'nameMsg', 'red')

    else {
        displayMsg('valid lastname ', 'lnameMsg', 'green')
        return true
    }
}
//55raw.ggf233@gmail.com

function validEmail() {
    let email = document.getElementById('email').value
    if (email == "") {
        displayMsg('email is requred', 'emailMsg', 'red')
        return false
    }

    else if (!email.match(/^([a-zA-Z])[a-z0-9\_\.]+\@+(([a-z])+\.)+([a-z])+$/))
        displayMsg(`invalid email`, 'emailMsg', 'red')

    else {
        displayMsg('valid email ', 'emailMsg', 'green')
        return true
    }
}

function validPassword(){
    let password=document.getElementById('password').value
    if (password==""){
        displayMsg('password is requred', 'passwordMsg', 'red')
        return false
    }

    else if(!password.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#?!%$&*]).{8,50}$/)){
        displayMsg('must contain one uppercase,one lowercase,one numeric,one special character and must be more then 8 characters','passwordMsg','red')
        return false
    }

    else {
        displayMsg('valid password ', 'passwordMsg', 'green')
        return true
    }
}

function validForm() {
    if (validFname() && validLname() && validEmail() && validPassword()) {
        return true
    }
    else {
        return false
    }
}




function displayMsg(message, idValue, colorValue) {
    document.getElementById(idValue).innerHTML = message
    document.getElementById(idValue).style.color = colorValue
}