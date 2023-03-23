//let primeiroNome = prompt('Digite o seu Primeiro Nome')

function revelar() {
    document.querySelector(".containerResultado").style.display = "block"
}

function calcular() {
    let idade = document.querySelector("#containerIdade").value;
    let altura = document.querySelector("#containerAltura").value;
    let peso = document.querySelector("#containerPeso").value;


    let IMC = peso / (altura * altura)

    if (IMC <= 18.5) {
        let resultado = document.querySelector(".resultado");
        resultado.innerHTML = `voce está abaixo do peso`
        revelar()

    }else if (IMC > 18.5 && IMC <= 24.9) {
        let resultado = document.querySelector(".resultado");
        resultado.innerHTML = `voce está no seu peso ideal`
        revelar()

    }else if (IMC >= 25.0 && IMC <= 29.9) {
        let resultado = document.querySelector(".resultado");
        resultado.innerHTML = `voce está acima do peso`
        revelar()

    }else if (IMC > 30.0 && IMC <= 34.9) {
        let resultado = document.querySelector(".resultado");
        resultado.innerHTML = `voce está com Obesidade Classe 1`
        revelar()

    }else if (IMC > 35.0 && IMC <= 39.9) {
        let resultado = document.querySelector(".resultado");
        resultado.innerHTML = `voce está com Obesidade Classe 2`
        revelar()

    }else if (IMC > 40.0) {
        let resultado = document.querySelector(".resultado");
        resultado.innerHTML = `voce está com Obesidade Classe 3`
        revelar()
    }
}
