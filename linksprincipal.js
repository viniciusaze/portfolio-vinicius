let textoL = document.getElementsByClassName('linkp')[0]
let textoG = document.getElementsByClassName('linkp')[1]
let areaL = document.getElementsByClassName('links')[0]
let areaG = document.getElementsByClassName('links')[1]

textoL.addEventListener('mouseenter', entrarL)
textoL.addEventListener('mouseleave', sairL)

textoG.addEventListener('mouseenter', entrarG)
textoG.addEventListener('mouseleave', sairG)

function entrarL(){
    textoL.style.display = 'block'
}

function sairL(){
    textoL.style.display = 'none'
}

function entrarG(){
    textoG.style.display = 'block'
}

function sairG(){
    textoG.style.display = 'none'
}

