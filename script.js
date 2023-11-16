
let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2"); 
let resultado = document.querySelector("#resultado");
let btSomar = document.getElementById("btSomar");
let btSubtrair = document.getElementById("btSubtrair")
let btMultiplicar = document.getElementById("btMultiplicar")
let btDividir = document.getElementById("btDividir")
let idioma = document.getElementById("idioma")
let titulo = document.querySelector("#titulo")
let texto = document.getElementById("texto")
btSomar.addEventListener("click", function () {
    soma(Number(valor1.value), Number(valor2.value))
});
btSubtrair.addEventListener("click", function() {
    subtrair(Number(valor1.value), Number(valor2.value))
});
btMultiplicar.addEventListener("click", function () {
    multiplicar(Number(valor1.value), Number(valor2.value))
})
btDividir.addEventListener("click", function () {
    dividir(Number(valor1.value), Number(valor2.value))
})
idioma.addEventListener("change", function () {
    let valor = idioma.value
    if (this.value == "br") {
        btSomar.value = "Somar"
        btSubtrair.value = "Subtrair"
        btDividir.value = "Dividir"
        btMultiplicar.value = "Multiplicar"
        titulo.textContent = "Calculadora"
    }
    else if (this.value == "es") {
        btSomar.value = "Sumar"
        btSubtrair.value = "Sustraer"
        btMultiplicar.value = "Multiplicar"
        btDividir.value = "División"
    }
    else if (this.value == "en") {
        btSomar.value = "Add"
        btSubtrair.value = "Subtract"
        btMultiplicar.value = "Multiply"
        btDividir.value = "Divide"
        titulo.textContent = "Calculator"
    }
    else if (this.value == "fr") {
        btSomar.value = "Ajouter"
        btSubtrair.value = "Soustraire"
        btMultiplicar.value = "Multiplier"
        btDividir.value = "Diviser"
    }
})
function soma(a, b) {
    resultado.textContent = a + b;
}
function subtrair (a, b) {
    resultado.textContent = a - b;
}
function multiplicar (a, b) {
    resultado.textContent = a * b 
}
function dividir (a, b) {
    resultado.textContent = a / b
}