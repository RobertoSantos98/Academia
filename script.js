const form = document.getElementById('formulario');
const campo = document.querySelectorAll('.required')
const sobrenome = document.getElementById('Sobrenome');
const span = document.querySelectorAll('.span-required');
const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;


form.addEventListener('submit', (event) => {
    event.preventDefault();
    nameValidate();
    lastnameValidate();
    emailValidate();
});

function setError(index){
    campo[index].style.border = '2px solid #e63636';
    span[index].style.display = 'block';
}

function removeError(index){
    campo[index].style.border = '2px solid #008000';
    span[index].style.display = 'none';
}

function nameValidate(){
    if(campo[0].value.length < 3){
        setError(0);
    } 
    else{
        removeError(0);
    }
}

function lastnameValidate(){
    if(campo[1].value.length < 3){
        setError(1);
    }
    else{
        removeError(1);
    }
}

function emailValidate(){
    if(!emailRegex.test(campo[2].value)){
        setError(2);
    }
    else{
        removeError(2);
    }
}


