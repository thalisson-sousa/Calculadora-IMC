//let primeiroNome = prompt('Digite o seu Primeiro Nome')

function revelar() {
    document.querySelector(".containerResultado").style.display = "block"
    window.scroll(0, 1000)
}

function calcular() {
    let idade = document.querySelector("#containerIdade").value;
    let altura = document.querySelector("#containerAltura").value;
    let peso = document.querySelector("#containerPeso").value;


    let IMC = peso / (altura * altura)

    if (IMC <= 18.5) {
        let resultado = document.querySelector(".resultado");
        resultado.innerHTML = `Você está abaixo do peso! seu IMC é: ${IMC.toFixed(2)}`
        revelar()

    }else if (IMC > 18.5 && IMC <= 24.9) {
        let resultado = document.querySelector(".resultado");
        let resultadoIMC = document.querySelector(".resultadoIMC");
        resultado.innerHTML = `Parabéns, Você está no seu peso ideal! seu IMC é: ${IMC.toFixed(2)}`
        revelar()

    }else if (IMC >= 25.0 && IMC <= 29.9) {
        let resultado = document.querySelector(".resultado");
        let resultadoIMC = document.querySelector(".resultadoIMC");
        resultado.innerHTML = `Você está acima do peso! seu IMC é: ${IMC.toFixed(2)}`
        revelar()

    }else if (IMC > 30.0 && IMC <= 34.9) {
        let resultado = document.querySelector(".resultado");
        let resultadoIMC = document.querySelector(".resultadoIMC");
        resultado.innerHTML = `Você está com Obesidade Classe 1! seu IMC é: ${IMC.toFixed(2)}`
        revelar()

    }else if (IMC > 35.0 && IMC <= 39.9) {
        let resultado = document.querySelector(".resultado");
        let resultadoIMC = document.querySelector(".resultadoIMC");
        resultado.innerHTML = `Você está com Obesidade Classe 2! seu IMC é: ${IMC.toFixed(2)}`
        revelar()

    }else if (IMC > 40.0) {
        let resultado = document.querySelector(".resultado");
        let resultadoIMC = document.querySelector(".resultadoIMC");
        resultado.innerHTML = `Você está com Obesidade Classe 3! seu IMC é: ${IMC.toFixed(2)}`
        revelar()
    }
}
