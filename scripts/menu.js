function menu(){
    let menu = document.getElementById('hamburguer')
    let itens = document.getElementById('itens')
    if (itens.style.display == 'block'){
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
    }
}