function multiplicar (){
    let num = document.getElementById('txttab')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número')
    } else {
        let n = Number(num.value)
        let cont = 0
        tab.innerHTML = ' '
        while ( cont <= 10) { 
            let item = document.createElement('option')
            item.text = `${n} X ${cont} = ${n*cont} `
            item.value =`tab${c}`//utilizado para php
            tab.appendChild(item)
            cont ++
        }  
    }
}
/*
function cls(){

    res.innerHTML = '<br>Iniciar tabuada.'
}*/