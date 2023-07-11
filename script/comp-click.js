const tenisIcons = [...document.querySelectorAll('.com-tenisicon')]


function comprarCp(compcor){
    const compCP = document.querySelector('.comp-corcp')
    compCP.style.backgroundColor = compcor
}

function compImg(compimg){
    const imgCompBox = document.querySelector('.comp-box-ft')
    const tenisPrinc = document.querySelector('.comp-cortenis')
    tenisPrinc.src = compimg
    imgCompBox.src = compimg
}

function compCardCor(strcor){
    document.querySelector('.comp-cor-var').innerHTML = strcor
}

tenisIcons[0].addEventListener("click", () =>{
    comprarCp("#ff0000")
    compImg("imagens/tenis/aj-classic.png")
    compCardCor("Classic")
})
tenisIcons[1].addEventListener("click", () =>{
    comprarCp("#900000")
    compImg("imagens/tenis/aj-vermpreto.png")
    compCardCor("Darkred")
})
tenisIcons[2].addEventListener("click", () =>{
    comprarCp(" #00a6ff")
    compImg("imagens/tenis/aj-vermazul.png")
    compCardCor("Bluered")
})
tenisIcons[3].addEventListener("click", () =>{
    comprarCp("#000")
    compImg("imagens/tenis/aj-pretobranco.png")
    compCardCor("Blackwhite")
})
tenisIcons[4].addEventListener("click", () =>{
    comprarCp("#592800")
    compImg("imagens/tenis/aj-marrom.png")
    compCardCor("Brown")
})
tenisIcons[5].addEventListener("click", () =>{
    comprarCp("#2e005f")
    compImg("imagens/tenis/aj-roxo.png")
    compCardCor("Purple")
})
tenisIcons[6].addEventListener("click", () =>{
    comprarCp("#f8a7f2")
    compImg("imagens/tenis/aj-rosa.png")
    compCardCor("Lightpink")
})
tenisIcons[7].addEventListener("click", () =>{
    comprarCp("#ff009d")
    compImg("imagens/tenis/aj-rosapret.png")
    compCardCor("Pink")
})
tenisIcons[8].addEventListener("click", () =>{
    comprarCp("#ffcad1")
    compImg("imagens/tenis/aj-rosepret.png")
    compCardCor("Rosé")
})
tenisIcons[9].addEventListener("click", () =>{
    comprarCp("#ff3c00")
    compImg("imagens/tenis/aj-laranja.png")
    compCardCor("Orange")
})
tenisIcons[10].addEventListener("click", () =>{
    comprarCp("#b7ff00")
    compImg("imagens/tenis/aj-verdelim.png")
    compCardCor("Lightgreen")
})
tenisIcons[11].addEventListener("click", () =>{
    comprarCp("#06542a")
    compImg("imagens/tenis/aj-verde.png")
    compCardCor("Darkgreen")
})

