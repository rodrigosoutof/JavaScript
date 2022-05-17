function multiplicar (){
    let numb = Number( document.getElementById('txttab'))
    let cont = Number(0)
    let res  = document.querySelector('div#res')

    while ( cont <= 10){
        res = numb * cont
        cont ++
        res.innerHTML `${numb} X ${cont}`
    }

}