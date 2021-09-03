const botaoEnviar = document.getElementById('botao-enviar')
const botaoSortear = document.getElementById('botao-sortear')
const texto = document.getElementById('caixa-texto')

let arrayParticipantes = []

function inserirParticipante() {
    const listarParticipantes = document.getElementById('lista-participantes')
    let p = document.createElement('p')

    listarParticipantes.appendChild(p)
    
    arrayParticipantes.push(texto.value)
    
    p.innerHTML = texto.value
}

function sortearParticipantes() {
    const ganhador = document.getElementById('ganhador')
    let sorteado = Math.floor(Math.random() * arrayParticipantes.length)
    ganhador.innerHTML = `E o vencedor é ${arrayParticipantes[sorteado]}`
}

botaoEnviar.addEventListener('click', (e) => {
    e.preventDefault()

    inserirParticipante()

    console.log(arrayParticipantes)

    texto.value = ''
})

botaoSortear.addEventListener('click', () => {
    sortearParticipantes()
})

