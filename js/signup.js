function validatePassword(password) {
    if (typeof password !== 'string'){
        return [false, 'Error in validate password'];
    }
    if (password.length < 8) {
        return [false, "Password must have at least 8 characters"];
    }
    if (password.search( /[a-z]/ ) === -1) {
        return [false, 'Password must contain at least one lower case letter'];
    }
     if (password.search( /[A-Z]/ ) === -1) {
        return [false, 'Password must contain at least one upper case letter'];
    }
     if (password.search( /[0123456789]/ ) === -1) {
        return [false, 'Password must contain at least one digit'];
    }
     if (password.search( / \s/ ) !== -1) {
        return [false, 'Password may not contain spaces'];
    }
    return true;
}
// console.log(validatePassword('salom'))

document.querySelector('button').addEventListener('click', (event) => {
    event.preventDefault();
    let pas = document.querySelector('.password').value;
    let result = validatePassword(pas);
    let passConfirm = document.querySelector('.password__confirm').value;
    let resultConfirmPassword = document.querySelector('.confirm__res');
    let passRes = document.querySelector('.password__validate');
    result === true ? (passRes.innerText = 'great password') : passRes.innerText = result[1];
    if (passConfirm !== pas){resultConfirmPassword.innerText = 'Please repeat your password'};
    let getform = document.forms[1].elements;
    // for (let i=0; i<7; i++){
    //     console.log(getform[1])
    // }

    //
    function myFunction() {
    var obj ={};
    for(var i = 0 ; i < 7 ; i++){
        var item = getform.item(i);
        obj[item.name] = item.value;
    }

    console.log(obj);
    }
    myFunction();


    console.log(getform);
})