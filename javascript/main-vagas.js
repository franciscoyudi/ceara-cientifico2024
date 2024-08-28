const div_cards_vagas = document.querySelector('div.cards-vagas');

const lista_vagas = [
    {
        titulo: "Tecnico de <strong>Informática</strong>",
        tipo: "OFFICE TOTAL S/A",
        cargo: "Técnico",
        desc: "Descrição: Atendimento ao Cliente:Responder prontamente às solicitações dos clientes por telefone, e-mail ou chat online, mostrando empatia e profissionalismo.Assegurar que cada interação com o cliente seja uma chance de proporcionar uma experiência positiva, solucionando questões de...",
        local: "São Paulo",
        extra: "Exclusivo para PCD",
        data: "27/07/2024",
        link: "https://www.vagas.com.br/vagas/v2664187/tecnico-de-informatica",
    },
    {
        titulo: "Tecnico de <strong>Informática</strong>",
        tipo: "OFFICE TOTAL S/A",
        cargo: "Técnico",
        desc: "Descrição: Atendimento ao Cliente:Responder prontamente às solicitações dos clientes por telefone, e-mail ou chat online, mostrando empatia e profissionalismo.Assegurar que cada interação com o cliente seja uma chance de proporcionar uma experiência positiva, solucionando questões de...",
        local: " São José do Rio Preto / SP",
        extra: "",
        data: "27/07/2024",
        link: "https://www.vagas.com.br/vagas/v2664188/tecnico-de-informatica",
    },

    {
        titulo: "10615 - Gerente de <strong>TI</strong>",
        tipo: "Talent Group",
        cargo: "Gerência",
        desc: "implantar junto ao time soluções de infraestrutura, segurança;Propor plano de investimento para atualização tecnológica ;Interagir com clientes internos e externos a fim de entender as necessidades e propor soluções tecnológicas",
        local: "São Paulo / SP",
        extra: "",
        data: "29/07/2024",
        link: "https://www.vagas.com.br/vagas/v2662730/10615-gerente-de-ti",
    },
    {
        titulo: "Supervisor de <strong>TI</strong>",
        tipo: "Penso <strong>Tecnologia</strong>",
        cargo: "Supervisão/Coordenação",
        desc: "Descrição: Sobre nós: A Penso Tecnologia é uma empresa de serviços de TI criada para possibilitar que os clientes utilizem a tecnologia a favor de seus negócios. altos padrões de qualidade e é composta por profissionais especializados em diferentes plataformas tecnológicas Oportunidade...",
        local: "São Paulo / SP",
        extra: "",
        data: "11/06/2024",
        link: "https://www.vagas.com.br/vagas/v2649408/supervisor-de-ti",
    },
]

function CriarVagas(item){
    const criar_card_vaga = document.createElement("div")
    const titulo_card = document.createElement("div")
    const tipo_card = document.createElement("div")
    const cargo_card = document.createElement("div")
    const desc_card = document.createElement("div")
    const infos_card = document.createElement("div")
    const local_card = document.createElement("div")

    const data_card = document.createElement("div")
    
    criar_card_vaga.className = "card-vaga"
    titulo_card.className = "titulo-vaga"
    tipo_card.className = "tipo-vaga"
    cargo_card.className = "cargo-vaga"
    desc_card.className = "desc-vaga"
    infos_card.className = "infos"
    local_card.className = "local-vaga"

    data_card.className = "data-vaga"
    div_cards_vagas.appendChild(criar_card_vaga)
    criar_card_vaga.appendChild(titulo_card)
    criar_card_vaga.appendChild(tipo_card)
    criar_card_vaga.appendChild(cargo_card)
    criar_card_vaga.appendChild(desc_card)
    criar_card_vaga.appendChild(infos_card)
    infos_card.appendChild(local_card)

    const extra_card = document.createElement("div")
    extra_card.className = "extra"
    infos_card.appendChild(extra_card)
    extra_card.innerHTML = `${item.extra}`

    infos_card.appendChild(data_card)
    titulo_card.innerHTML = `${item.titulo}`
    tipo_card.innerHTML = `${item.tipo}`
    cargo_card.innerHTML = `${item.cargo}`
    desc_card.innerHTML = `${item.desc}`
    local_card.innerHTML = `${item.local}` 
    data_card.innerHTML = `${item.data}`

    criar_card_vaga.onclick = () => {
        window.open(item.link, '_blank');
    }
}
lista_vagas.map(function(item) {
    CriarVagas(item)
})