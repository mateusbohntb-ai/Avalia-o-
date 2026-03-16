// function
// getElementById
//addEventListner
// .......................................Questão 1 ..................................................//
function exemplo1() {// Função começa aqui 
    //ESCREVA O ENUNCIADO AQUI 
    //SOME DOIS NUMEROS 
    const numero = Number(prompt("Digite um numero:"))
    const numero2 = Number(prompt("Digite um outro numero:"))
    alert(numero + numero2 + " Resultado final")
    //Use o  "alert("para ver se funcionou")" 
}//função termina aqui

const buttonExemplo1 = document.getElementById("exemplo1")
buttonExemplo1.addEventListener("click", () => { exemplo1() })



// .......................................Questão 2 ..................................................//


function exemplo2() {// Função começa aqui 

    alert("aaa")

}//função termina aqui

const buttonExemplo2 = document.getElementById("exemplo2")
buttonExemplo2.addEventListener("click", () => { exemplo2() })