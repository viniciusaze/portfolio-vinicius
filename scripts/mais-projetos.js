function mais() {
    let botao = document.getElementById('mostrar-mais')
    let ele0 = document.getElementsByClassName('mais')[0]
    let ele1 = document.getElementsByClassName('mais')[1]
    let ele2 = document.getElementsByClassName('mais')[2]

    if (ele0.style.display === 'block') {
        ele0.style.display = 'none'
        ele1.style.display = 'none'
        ele2.style.display = 'none'
        botao.innerHTML = 'Mostrar Mais 🢃'
    } else {
        ele0.style.display = 'block'
        ele1.style.display = 'block'
        ele2.style.display = 'block'
        botao.innerHTML = 'Mostrar Menos 🢁'
    }
}