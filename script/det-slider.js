var idx = 1
document.querySelector('#detradio1').checked = true

function detSlider(){
    idx++
    if(idx > 3){
        idx = 1
    }
    document.querySelector('#detradio'+idx).checked = true
}

setInterval(() => {
    detSlider()
}, 5000);