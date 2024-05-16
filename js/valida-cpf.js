export default function ehUmCPF (campo) {
    const cpf = campo.value.replace(/\.|-/g,"");
    if (validaNumerosRepetidos(cpf) || validaPrimeiroDigito(cpf) || validaSegundoDigito(cpf)) {
        console.log("esse cpf não existe!")
    } else {
        console.log("existe!")
    }
}

function validaNumerosRepetidos (cpf) {
    const numerosRepetidos = [
        "11111111111",
        "22222222222",
        "33333333333"
    ]
    return numerosRepetidos.includes(cpf);
}

//cpf base: 178.601.847.02

function validaPrimeiroDigito (cpf) {
    let soma = 0;
    let multiplicador = 10;

    for(let tamanho = 0; tamanho < 9; tamanho++) {
        soma += cpf[tamanho] * multiplicador;
        multiplicador--;
    }

    soma = (soma*10) % 11;
    if (soma == 10 || soma == 11) {
        soma = 0;
    }

    return soma != cpf[9];
}

function validaSegundoDigito (cpf) {
    let soma = 0;
    let multiplicador = 11;

    for(let tamanho = 0; tamanho < 10; tamanho++) {
        soma += cpf[tamanho] * multiplicador;
        multiplicador--;
    }

    soma = (soma*10) % 11;
    if (soma == 10 || soma == 11) {
        soma = 0;
    }

    return soma != cpf[10];
}

