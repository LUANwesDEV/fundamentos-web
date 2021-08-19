/*
Case Sensitive = reconhece letras maiusculas e minusculas

por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementsByName()
por Classe: getElementsByClassName()
por Seletor: querySelector() a mais usada, pode selecionar varios elementos, melhor para acessar o DOM !
*/

let nome = window.document.getElementById ("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOk = false 
let emailOk = false 
let assuntoOk = false 
let mapa = document.querySelector("#mapa")

nome.style.width = "100%"
email.style.width = "100%"


function validaNome(){
    let txtNome = document.querySelector("#txtNome")
    if(nome.value.length < 3){
        txtNome.innerHTML = "Nome Invalido"
        txtNome.style.color = "red"
    }else{
        txtNome.innerHTML = "Nome valido"
        txtNome.style.color = "green"
        nomeOk = true
    }
} 

function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 ){
        txtEmail.innerHTML = "E-mail invalido"
        txtEmail.style.color = "red"
    } else{
        txtEmail.innerHTML = "E-mail válido"
        txtEmail.style.color = "green"
        emailOk = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto")

    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = "Utrapassou o numero de caracteres, o maximo é 100!"
        txtAssunto.style.color = "Red"
        txtAssunto.style.display = "block"
    }else{
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert("Formulario enviado com sucesso!")
    }else{
        alert("Preencha o formulario corretamente antes de enviar...")
    }
}

function mapaZoom(){
    mapa.style.width = "500px"
    mapa.style.height = "350px"

}

function mapaNormal(){
    mapa.style.width = "400px"
    mapa.style.height = "250px"
}

