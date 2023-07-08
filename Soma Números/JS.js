function soma() {
    const num1 = Number(document.querySelector('input#numberA').value);
    const num2 = Number(document.querySelector('input#numberB').value);
    const resultado = document.querySelector('div#resultado');
    const soma = num1 + num2;
    resultado.innerHTML = `O resultado da soma será ${soma}`;
}

function subtracao() {
    let diferenca;
    const num1 = Number(document.querySelector('input#numberA').value);
    const num2 = Number(document.querySelector('input#numberB').value);
    const resultado = document.querySelector('div#resultado');
    if (num1 > num2) {
        diferenca = num1 - num2;
    } else if (num2 > num1) {
        diferenca = num2 - num1;
    } else {
        diferenca = 0;
    }
    resultado.innerHTML = `O resultado da subtração será ${diferenca}`;
}

function multiplicacao() {
    const num1 = Number(document.querySelector('input#numberA').value);
    const num2 = Number(document.querySelector('input#numberB').value);
    const resultado = document.querySelector('div#resultado');
    const produto = num1 * num2;
    resultado.innerHTML = `O resultado da multiplicação será ${produto}`;
}

function divisao() {
    let resto;
    const num1 = Number(document.querySelector('input#numberA').value);
    const num2 = Number(document.querySelector('input#numberB').value);
    const resultado = document.querySelector('div#resultado');
    if (num1 > num2) {
        resto = num1 / num2;
    } else if (num2 > num1) {
        resto = num2 / num1;
    } else {
        resto = 1;
    }
    resultado.innerHTML = `O resultado da divisão será ${resto}`;
}