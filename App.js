const nombre=document.getElementById('name');
const email=document.getElementById('email');
const password=document.getElementById('password');
const form=document.getElementById('form');
const parrafo=document.getElementById('warnings');

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = "";
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/
    let entrar=false;
    parrafo.innerHTML=""
    if (nombre.value.length <6) {
        warnings+= `El nombre no es valido <br>`
        entrar= true
    }
    console.log(regexEmail.test(email.value));
    if (!regexEmail.test(email.value)) {
        warnings+= `El Email no es valido <br>`
        entrar=true
    }
    if (password.value.length <8 ) {
        warnings+= `Contraseña no valida <br>`
        entrar= true
    }

    if (warnings) {
        parrafo.innerHTML= warnings;
    }else{
        parrafo.innerHTML= "Enviado";
    }
})