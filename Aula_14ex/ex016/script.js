function contar() {
    let ini = document.getElementById('txtini')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpas')
    let res = document.querySelector('div#res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: '
        /* Realizando a conversão das variaveis que estão com string*/
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
    if (p <= 0){
        window.alert('Passo inválido! Considerando Passo 1')
        p = 1
    }

    if (i < f) { // contagem crescente
        for(let cont = i; cont <= f; cont += p)
        res.innerHTML += `${cont} \u{1f449} `

    } else { // contagem regressiva
        for (let cont = i; cont >= f; cont -=p)
        res.innerHTML += `${cont} \u{1f449} `
    }
    res.innerHTML += `\u{1f3c1}`
    }
}