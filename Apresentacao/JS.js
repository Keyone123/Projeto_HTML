const footer = document.querySelector('.teste')
const circulo = [...document.querySelectorAll('.circle2')]
const bot = document.querySelector('.botao')
circulo.forEach((el)=>{
    el.addEventListener('click', (evt)=>{
        const nome = `<h1>${evt.target.alt}</h1>`
        bot.style.display = 'block'
        footer.innerHTML = nome
    })
})
bot.addEventListener('click', (evt) =>{
    location.reload()
})