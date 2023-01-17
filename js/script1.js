
function calcular(){

    var display=document.getElementById("display")
    let altura =parseFloat(document.getElementById("altura").value)
    let peso= parseFloat(document.getElementById("peso").value)
    let emoji=document.getElementById("emoji")
    let indicador=document.getElementById("indicador")

    let imc=peso/(altura*altura)

    let muitoAbaixoDoPeso = imc < 17
    let abaixoDoPeso = imc >= 17   && imc <= 18.49 
    let pesoNormal   = imc >= 18.5 && imc <= 24.99 
    let acimaDoPeso  = imc >= 25   && imc <= 29.99 
    let obesidade1   = imc >= 30   && imc <= 34.99 
    let obesidade2   = imc >=35    && imc <= 39.99
    let obesidade3   = imc > 40

    if(muitoAbaixoDoPeso){
        emoji.src='img/muitoBaixoPeso.jpg'
        indicador.innerHTML="Seu IMC indica muito abaixo do peso"
    }else if(abaixoDoPeso){
        emoji.src='img/baixoPeso.jpg'
        indicador.innerHTML="Seu imc indica abaixo do peso"
    }else if(pesoNormal){
        emoji.src='img/normal.jpg'
        indicador.innerHTML="Seu imc indica peso ideal"
    }else if(acimaDoPeso){
        emoji.src='img/sobrepeso.jpg'
        indicador.innerHTML="Seu imc indica acima do Peso"
    }else if(obesidade1){
        emoji.src='img/obesidade1.jpg'
        indicador.innerHTML="Seu imc indica obesidade 1"
    }else if(obesidade2){
        emoji.src='img/obesidade2.jpg'
        indicador.innerHTML="Seu imc indica obesidade 2"
    }else if(obesidade3){
        emoji.src='img/obesidade3.jpg'
        indicador.innerHTML="Seu imc indica obesidade 3"
    }else{
        console.log("nenhuma metrica")
    }
  
    display.innerHTML=`imc = ${imc.toFixed(2)}`

}