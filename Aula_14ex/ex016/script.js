function(verificar) {
    var ini = document.getElementsByName('ini')
    var fim = document.getElementsByClassName('fim')
    var pas = document.getElementsByClassName('pas')
    var res = document.querySelector('div#res')

    do {
        ini = ini + pas
        
    } while (ini <= fim)

    res.innerHTML = ini 





}