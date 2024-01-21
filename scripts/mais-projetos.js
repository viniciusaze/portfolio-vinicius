function mais() {
    let botao = document.getElementById('mostrar-mais')
    let mais = document.getElementById('mais-projetos')

    if (mais.style.display === 'block') {
        mais.style.display = 'none'
        botao.innerHTML = 'Mostrar Mais'
    } else {
        mais.style.display = 'block'
        botao.innerHTML = 'Mostrar Menos'
    }
}