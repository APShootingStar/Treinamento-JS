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
    if( elem.key == "Enter" ) {
        btnAdd.click()
    }
    
    //console.log(elem.key)
})

btnAdd.addEventListener("click", ()=>{
    if( numero.value == "" ) {
        alert("Insira um número!")
    } else if( testaNumero() != undefined ) {
        alert("Número " + numero.value + " já inserido.")
        limpaCampo()
    } else {
        //console.log( testaNumero() )
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

        //console.log(listaNumeros)
    }
})


btnFinalizar.addEventListener("click", ()=>{
    primeiro.innerHTML = listaNumeros[0]
    ultimo.innerHTML = listaNumeros.at(-1)
    soma.innerHTML = listaNumeros.reduce((x, y)=>x+y)
    maior.innerHTML = listaNumeros.reduce((a, b)=>Math.max(a, b))
    menor.innerHTML = listaNumeros.reduce((a, b)=>Math.min(a, b))
})


btnReiniciar.addEventListener("click", ()=>{
    window.location.reload()
})

function mudaBotao() {
    if( listaNumeros.length == 10 ) {
        numero.setAttribute("disabled", null)
        numero.style.cursor = "not-allowed"
        btnAdd.setAttribute("disabled", null)
        btnAdd.style.cursor = "not-allowed"
        btnFinalizar.removeAttribute("disabled")
        btnFinalizar.style.cursor = "pointer"
    }
}

function limpaCampo() {
    numero.value = ""
    numero.focus()
}

function testaNumero() {
    return listaNumeros.find((v)=> numero.value == v)
}

btnApagar.addEventListener("click", ()=>{
    let selecionados = []

    for( let i=0; i<inseridos.options.length; i++ ) {
        if( inseridos.options[i].selected ) {
            selecionados.push(inseridos.options[i].value)
        }
    }
    
    //console.log( selecionados )

    selecionados.forEach((v)=>{
        listaNumeros = listaNumeros.filter((e)=> e != v)
        document.getElementById(v+"-id").remove()
    })

    if( listaNumeros.length < 10 ) {
        numero.removeAttribute("disabled")
        numero.style.cursor = "pointer"
        btnAdd.removeAttribute("disabled")
        btnAdd.style.cursor = "pointer"
        btnFinalizar.setAttribute("disabled", null)
        btnFinalizar.style.cursor = "not-allowed"
    }

    txtContar.innerHTML = "Restam " +
                     (10 - listaNumeros.length) +
                     " números"
                     
    console.log(listaNumeros)
})
