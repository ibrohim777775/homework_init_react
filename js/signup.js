// validation password
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


// validation email
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const INPUT = document.querySelector('.email');
let email = document.querySelector('.res__email');
function validateEmail(value) {
  return EMAIL_REGEXP.test(value);
}
function updateInput() {
  if (validateEmail(INPUT.value)){
        INPUT.style.borderColor = 'green';
        email.innerText = '';
  }
  else {
        INPUT.style.borderColor = 'red';
        email.innerText = 'Please, write your email';
  }
}
INPUT.addEventListener('input', updateInput);



document.querySelector('button').addEventListener('click', (event) => {
    event.preventDefault();

    let pas = document.querySelector('.password').value;
    let email = document.querySelector('.email').value;
    let result = validatePassword(pas);
    let passConfirm = document.querySelector('.password__confirm').value;
    let resultConfirmPassword = document.querySelector('.confirm__res');
    let passRes = document.querySelector('.password__validate');

    if (result === true){ 
        passRes.innerText = 'great password';
        passRes.style.color = 'darkgreen';
        passRes.style.fontWeight = '800';

        passRes.style.marginBottom = '15px';

    }
    else{
        passRes.innerText = result[1];
        passRes.style.color = 'red';

    };
    if (passConfirm !== pas){
        resultConfirmPassword.innerText = 'Please repeat your password'
    }
    else{
        resultConfirmPassword.innerText = ' '
    };
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


    // console.log(getform);
})