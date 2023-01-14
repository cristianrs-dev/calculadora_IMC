
function calcular(){

    var display=document.getElementById("display")
    let altura =parseFloat(document.getElementById("altura").value)
    let peso= parseFloat(document.getElementById("peso").value)
    let emoji=document.getElementById("emoji")

    let imc=peso/(altura*altura)

    let abaixoDoPeso = imc >= 17   && imc <= 18.49 
    let pesoNormal   = imc >= 18.5 && imc <= 24.99 
    let acimaDoPeso  = imc >= 25   && imc <= 29.99 
    let obesidade1   = imc >= 30   && imc <= 34.99 



    if(abaixoDoPeso){
        emoji.src='img/baixoPeso.jpg'
    }else if(pesoNormal){
        emoji.src='img/normal.jpg'
    }else if(acimaDoPeso){
        emoji.src='img/sobrepeso.jpg'
    }else if(obesidade1){
        emoji.src='img/obesidade.jpg'
    }else{
        console.log("nenhuma metrica")
    }
  
    display.innerHTML=`imc =  ${imc.toFixed(2)}`

}