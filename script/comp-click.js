const tenisIcons = [...document.querySelectorAll('.com-tenisicon')]
const sizeradios = [...document.querySelectorAll('.radioblock')]
const clickradio =[...document.querySelectorAll('.list-tam li')]



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

// INPUTS
// INPUTS
// INPUTS
// INPUTS
// INPUTS 
function compsize(sizen, sizemed, sexo){
    var sizecm = document.querySelector('.comp-tam-varcm')
    var sizenum = document.querySelector('.comp-tam-var')
    sizecm.innerHTML = sizemed
    sizenum.innerHTML = `${sexo} ${sizen}`
}

sizeradios[0].addEventListener("click", () => {
    compsize(35, 22.5, "Masc")
})
sizeradios[1].addEventListener("click", () => {
    compsize(36, 23.5, "Masc")
})
sizeradios[2].addEventListener("click", () => {
    compsize(37,24, "Masc")
})
sizeradios[3].addEventListener("click", () => {
    compsize(38,25, "Masc")
})
sizeradios[4].addEventListener("click", () => {
    compsize(39, 25.5, "Masc")
})
sizeradios[5].addEventListener("click", () => {
    compsize(40, 26.5, "Masc")
})
sizeradios[6].addEventListener("click", () => {
    compsize(41, 27.5, "Masc")
})
sizeradios[7].addEventListener("click", () => {
    compsize(42, 28, "Masc")
})
sizeradios[8].addEventListener("click", () => {
    compsize(43, 29, "Masc")
})
sizeradios[9].addEventListener("click", () => {
    compsize(44, 30, "Masc")
})
sizeradios[10].addEventListener("click" , () => {
    compsize(33, 21.5, "Fem")
})
sizeradios[11].addEventListener("click" , () => {
    compsize(34, 22.5, "Fem")
})
sizeradios[12].addEventListener("click" , () => {
    compsize(35, 23, "Fem")
})
sizeradios[13].addEventListener("click" , () => {
    compsize(36, 24, "Fem")
})
sizeradios[14].addEventListener("click" , () => {
    compsize(37,24.5, "Fem")
})
sizeradios[15].addEventListener("click" , () => {
    compsize(38,25.5, "Fem")
})
sizeradios[16].addEventListener("click" , () => {
    compsize(39, 26, "Fem")
})
sizeradios[17].addEventListener("click" , () => {
    compsize(40, 27, "Fem")
})
sizeradios[18].addEventListener("click" , () => {
    compsize(41, 27.5, "Fem")
})
sizeradios[19].addEventListener("click" , () => {
    compsize(42, 28.5, "Fem")
})







