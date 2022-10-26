let currentAdj = document.getElementById('adjToChange')
let currentSub = document.getElementById('subToChange')
let currentVer = document.getElementById('verToChange')

let changeAdj = ''
let changeSub = ''
let changeVer = ''



function adj(selected) {
    changeAdj = selected.innerHTML;
    currentAdj.innerHTML = changeAdj;
}

function sub(selected) {
    changeSub = selected.innerHTML;
    currentSub.innerHTML = changeSub;
}

function ver(selected) {
    changeVer = selected.innerHTML;
    currentVer.innerHTML = changeVer;
    
}