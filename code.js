let currentAdj = document.getElementById('adjToChange')
let currentSub = document.getElementById('subToChange')
let currentVer = document.getElementById('verToChange')

function adj(selected) {
    currentAdj.innerHTML = selected.innerHTML;
    
}

function sub(selected) {
    currentSub.innerHTML  = selected.innerHTML;
}

function ver(selected) {
    currentVer.innerHTML = selected.innerHTML;
    
    
}