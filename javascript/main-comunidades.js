const lista_comu = [
    {
        nome: "Telegram Mulheres na Tecnológia",
        link: "https://t.me/+Axl8r7GNqHdiNmNh",
        desc: "Projeto incentivador da Mulher na Tecnológia",
        imageUrl: "img/azulFem.png",    
    },
    {
        nome: "WhatsApp Mulheres na Tecnológia",
        desc: "Projeto incentivador da Mulher na Tecnológia",
        link: "https://chat.whatsapp.com/Dpa1MyHh51FC6PIwlNe8rz",
        imageUrl: "img/verdeFem.png",    
    },
]

const div_cards_comunidades = document.querySelector(".comunidade-cards-div")

function CriarCardComunidade(comu){
    const criar_card_comunidade = document.createElement("div")
    const img_card = document.createElement("div")
    const criar_div_desc = document.createElement("div")
    const title_card = document.createElement("h1")
    const desc_card = document.createElement("p")
    criar_card_comunidade.className = "comunidade-card"
    img_card.className = "img-card-comunidade"
    criar_div_desc.className = "desc-card-comunidade"
    title_card.className = "titulo-card-comunidade"
    desc_card.className = "paragrafo-desc-card-comunidade"
    div_cards_comunidades.appendChild(criar_card_comunidade)
    criar_card_comunidade.appendChild(img_card)
    criar_card_comunidade.appendChild(criar_div_desc)

    criar_div_desc.appendChild(title_card)
    criar_div_desc.appendChild(desc_card)

    criar_card_comunidade.onclick = () => {
        window.open(comu.link, '_blank');
    }

    img_card.style.backgroundImage = `url(${comu.imageUrl})`;
    desc_card.innerText = comu.desc;
    title_card.innerText = comu.nome;
}
lista_comu.map(function(comunidade){
    CriarCardComunidade(comunidade)
})