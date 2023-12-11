function validador(){
    var nome = document.getElementById("nome")
    var sobrenome =document.getElementById("sobrenome")
    var sucesso = document.querySelector("#MsgSucesso")
    var erro = document.querySelector("#MsgErro")

    erro.style.display = "none"
    sucesso.style.display = "none"

    if(nome.value){
        sobrenome.style.borderColor = "red";
        erro.innerHTML = "Preencha o Sobrenome";
        erro.style.display ="block";
    }
    if(sobrenome.value) {
        nome.style.borderColor = "red";
        erro.innerHTML = "Preencha o nome";
        erro.style.display ="block";
    } 
    if(nome.value && sobrenome.value){
        erro.style.display ="none";
        sucesso.style.display ="block";
        sucesso.innerHTML ="o envio deu certo";
        nome.style.borderColor = "green";
        sobrenome.style.borderColor = "green";
    }
    if(nome.value == "" && sobrenome.value == "") {
        sobrenome.style.borderColor = "red";
        nome.style.borderColor ="red";
        erro.innerHTML = "Preencha o nome <br> Preencha o Sobrenome";
        erro.style.display ="block";
    }
}