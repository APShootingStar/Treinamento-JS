const numero = document.getElementById("numero")
const btnAdd = document.getElementById("btn-add")
const txtContar = document.getElementById("txt-contar")
const inseridos = document.getElementById("inseridos")
const opt1 = document.getElementById("opt1")
const btnApagar = document.getElementById("btn-apagar")
const primeiro = document.getElementById("primeiro")
const ultimo = document.getElementById("ultimo")
const soma = document.getElementById("soma")
const maior = document.getElementById("maior")
const menor = document.getElementById("menor")
const btnFinalizar = document.getElementById("btn-finalizar")
const btnReiniciar = document.getElementById("btn-reiniciar")


var listaNumeros = Array()

btnFinalizar.style.cursor = "not-allowed"
btnFinalizar.setAttribute("disabled", null)

numero.addEventListener("keypress", (elem)=>{
   if (console.log(elem.key = "Enter")) {
    btnAdd.click()
   }
   console.log.key()
})

btnAdd.addEventListener("click", ()=>{
    if( numero.value == "" ) {
        alert("Insira um número!")
    } else {
        listaNumeros.push( Number(numero.value) )
        
        txtContar.innerHTML = "Restam " +
                     (10 - listaNumeros.length) +
                     " números"
        
        const newOption = document.createElement("option")
        newOption.id = numero.value + "-id"
        newOption.text = numero.value
        inseridos.appendChild(newOption)

        mudaBotao()
        limpaCampo()

        console.log(listaNumeros)
    }
})

btnFinalizar.addEventListener("click", ()=>{
    primeiro.innerHTML = listaNumeros[0]
    ultimo.innerHTML = listaNumeros.at(-1)
    soma.innerHTML = listaNumeros.reduce((x, y)=>x+y)
    maior.innerHTML = listaNumeros.reduce((a, b)=>Math.max(a, b))
    menor.innerHTML = listaNumeros.reduce((a, b)=>Math.min(a, b))
})

btnReiniciar.addEventListener("click", ()=> {
    window.location.reload()
})

function mudaBotao(){
    if(listaNumeros.length == 10){
        numero.setAttribute("disabled", null)
        numero.style.cursor = "not-allowed"
        btnAdd.setAttribute("disabled", null)
        btnAdd.style.cursor = "not-allowed"
        btnFinalizar.removeAttribute("disebled")
        btnFinalizar.style.cursor = "pointer"
    }
}

function limpaCampo(){
    numero.value = ""
    numero.focus()
}