let texthtml = document.getElementById('deshabhtml')
let textcss = document.getElementById('deshabcss')
let textjs = document.getElementById('deshabjs')
let divhtml = document.getElementById('habhtml')
let divcss = document.getElementById('habcss')
let divjs = document.getElementById('habjs')

function html5(){

    if (texthtml.style.display == 'block'){
        texthtml.style.display ='none'
        divhtml.style.width = '70px'
        divhtml.style.height = '70px'
        divhtml.style.border = '1px solid #CF1D4B'
        divhtml.style.display = 'inline-block'

        
        divcss.style.display = 'inline-block'
        divjs.style.display = 'inline-block'

    } else {
        texthtml.style.display = 'block'
        divhtml.style.display = 'block'

        divhtml.style.width = '90%'
        divhtml.style.height = '80%'
        texthtml.style.margin = 'auto'
        divhtml.style.margin = 'auto'
        divhtml.style.border = '4px solid #f19cab'

        textcss.style.display = 'none'
        textjs.style.display = 'none'

        divcss.style.width = '70px'
        divcss.style.height = '70px'

        divjs.style.width = '70px'
        divjs.style.height = '70px'

        divcss.style.border = '1px solid #CF1D4B'
        divjs.style.border = '1px solid #CF1D4B'

        divcss.style.display = 'inline-block'
        divjs.style.display = 'inline-block'  
    }
}

function css(){

    if (textcss.style.display == 'block'){
        textcss.style.display ='none'
        divcss.style.width = '70px'
        divcss.style.height = '70px'
        divcss.style.border = '1px solid #CF1D4B'
        divcss.style.display = 'inline-block'

        divhtml.style.display = 'inline-block'
        divjs.style.display = 'inline-block'
    } else {
        textcss.style.display = 'block'
        divcss.style.display = 'block'

        divcss.style.width = '90%'
        divcss.style.height = '80%'
        textcss.style.margin = 'auto'
        divcss.style.margin = 'auto'
        divcss.style.border = '4px solid #f19cab'

        texthtml.style.display = 'none'
        textjs.style.display = 'none'

        divhtml.style.width = '70px'
        divhtml.style.height = '70px'

        divjs.style.width = '70px'
        divjs.style.height = '70px'

        divhtml.style.border = '1px solid #CF1D4B'
        divjs.style.border = '1px solid #CF1D4B'

        divhtml.style.display = 'inline-block'
        divjs.style.display = 'inline-block'
    }
}

function js(){

    if (textjs.style.display == 'block'){
        textjs.style.display ='none'
        divjs.style.width = '70px'
        divjs.style.height = '70px'
        divjs.style.border = '1px solid #CF1D4B'
        divjs.style.display = 'inline-block'

        divhtml.style.display = 'inline-block'
        divcss.style.display = 'inline-block'
    } else {
        textjs.style.display = 'block'
        divjs.style.display = 'block'

        divjs.style.width = '90%'
        divjs.style.height = '80%'
        textjs.style.margin = 'auto'
        divjs.style.margin = 'auto'
        divjs.style.border = '4px solid #f19cab'

        texthtml.style.display = 'none'
        textcss.style.display = 'none'

        divhtml.style.width = '70px'
        divhtml.style.height = '70px'

        divcss.style.width = '70px'
        divcss.style.height = '70px'

        divhtml.style.border = '1px solid #CF1D4B'
        divcss.style.border = '1px solid #CF1D4B'

        divhtml.style.display = 'inline-block'
        divcss.style.display = 'inline-block'
    }
}
