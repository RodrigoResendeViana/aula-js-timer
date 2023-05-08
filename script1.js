let tmp

function tempo(){
    let relogio = document.querySelector('#main')
    let hora = new Date()
    relogio.innerHTML = (hora.toLocaleString())
}

document.querySelector('#ligar').addEventListener('click', ()=>{
    tmp = setInterval(tempo,1000)
})
document.querySelector('#desligar').addEventListener('click', ()=>{
    clearInterval(tmp)
})