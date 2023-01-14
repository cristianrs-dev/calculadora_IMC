
function getAltura(){

    let altura =parseFloat(document.getElementById("altura").value)
    return altura
    //console.log(altura)

}

function getPeso(){

    let peso= parseFloat(document.getElementById("peso").value)
    return peso
    //console.log(peso)

}

function resultadoCalculo(){
    
    let imc = getPeso() / ( getAltura() * getAltura() )
    return imc.toFixed(2)
    //console.log(imc)

}

function classificacaoIMC(){

let emoji=document.getElementById("emoji")
let imc = parseFloat(resultadoCalculo())

let abaixoDoPeso = imc >= 17   && imc <= 18.49 
let pesoNormal   = imc >= 18.5 && imc <= 24.99 
let acimaDoPeso  = imc >= 25   && imc <= 29.99 
let obesidade1   = imc >= 30   && imc <= 34.99 



    if(abaixoDoPeso){
        emoji.src='img/baixoPeso.jpg'
        return imc
    }else if(pesoNormal){
        emoji.src='img/normal.jpg'
        return imc
    }else if(acimaDoPeso){
        emoji.src='img/sobrepeso.jpg'
        return imc
    }else if(obesidade1){
        emoji.src='img/obesidade.jpg'
        return imc
    }else{
        console.log("nenhuma metrica")
    }

    
    
}

function exibir(){

    let display=document.getElementById("display")
    display.innerHTML=`imc =  ${classificacaoIMC()}`
    //console.log(calculo())

    
}






/*

function calcular(){
    var display=document.getElementById("display")
    let altura =parseFloat(document.getElementById("altura").value)
    let peso= parseFloat(document.getElementById("peso").value)
    let imc=peso/(altura*altura)
  
    display.innerHTML=`imc =  ${imc.toFixed(2)}`

}*/