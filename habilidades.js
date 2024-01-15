let texthtml = document.getElementById('deshabhtml')
let textcss = document.getElementById('deshabcss')
let textjs = document.getElementById('deshabjs')
let divhtml = document.getElementById('habhtml')
let divcss = document.getElementById('habcss')
let divjs = document.getElementById('habjs')

function html5(){

    if (texthtml.style.display == 'block'){
        texthtml.style.display ='none'
        divhtml.style.width = '90px'
        divhtml.style.height = '90px'
    } else {
        texthtml.style.display = 'block'

        texthtml.style.width = '420px'
        divhtml.style.width = '420px'
        divhtml.style.height = '300px'

        textcss.style.display = 'none'
        textjs.style.display = 'none'

        divcss.style.width = '90px'
        divcss.style.height = '90px'

        divjs.style.width = '90px'
        divjs.style.height = '90px'
    }
}

function css(){

    if (textcss.style.display == 'block'){
        textcss.style.display ='none'
        divcss.style.width = '90px'
        divcss.style.height = '90px'
    } else {
        textcss.style.display = 'block'

        textcss.style.width = '420px'
        divcss.style.width = '420px'
        divcss.style.height = '300px'

        texthtml.style.display = 'none'
        textjs.style.display = 'none'

        divhtml.style.width = '90px'
        divhtml.style.height = '90px'

        divjs.style.width = '90px'
        divjs.style.height = '90px'
    }
}

function js(){

    if (textjs.style.display == 'block'){
        textjs.style.display ='none'
        divjs.style.width = '90px'
        divjs.style.height = '90px'
    } else {
        textjs.style.display = 'block'

        divjs.style.width = '420px'
        divjs.style.width = '420px'
        divjs.style.height = '300px'

        texthtml.style.display = 'none'
        textcss.style.display = 'none'

        divhtml.style.width = '90px'
        divhtml.style.height = '90px'

        divcss.style.width = '90px'
        divcss.style.height = '90px'
    }
}
