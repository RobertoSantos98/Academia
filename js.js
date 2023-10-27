const form = document.getElementById('formulario');
const campo = document.getElementById('nome');
const span = document.querySelectorAll('.span-required');

function setError(index){
    campo[index].style.border = '2px solid #e63636';
    span[index].style.display = 'none';
}

function nameValidate(){
    if(campo.value.lenght < 4){
        console.log('Nome deve ter 3 caracteres');
    } 
    else{
        console.log('Nome validado');
    }
}


