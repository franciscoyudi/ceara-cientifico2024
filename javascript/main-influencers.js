const div_cards_mulheres = document.querySelector('div.cards-mulheres');

const db_mulheres = [
    {
        nome: "Adriana Saty",
        link: "https://instagram.com/adriana.saty",
        imageUrl: "img/ADRIANASATY.jpg",
    },
    {
        nome: "Adriana Saty",
        link: "https://instagram.com/adriana.saty",
        imageUrl: "img/ADRIANASATY.jpg",
    },
    {
        nome: "Adriana Saty",
        link: "https://instagram.com/adriana.saty",
        imageUrl: "img/ADRIANASATY.jpg",
    },
    {
        nome: "Adriana Saty",
        link: "https://instagram.com/adriana.saty",
        imageUrl: "img/ADRIANASATY.jpg",
    },
    {
        nome: "Rafaella Ballerini",
        link: "https://instagram.com/rafaballerini",
        imageUrl:"img/RAFFAELABALLERINI.jpg",
    },
    {
        nome: "Lorene Fadel",
        link: "https://instagram.com/lorenemaf",
        imageUrl:"img/LORENEFADEL.jpg",
    },
    {
        nome: "Fernanda Kipper",
        link: "https://instagram.com/kipper.dev",
        imageUrl:"img/FERNANDAKIPPER.jpg",
    },
    {
        nome: "Fernanda Kipper",
        link: "https://instagram.com/kipper.dev",
        imageUrl:"img/FERNANDAKIPPER.jpg",
    },
    {
        nome: "Fernanda Kipper",
        link: "https://instagram.com/kipper.dev",
        imageUrl:"img/FERNANDAKIPPER.jpg",
    },
    {
        nome: "Fernanda Kipper",
        link: "https://instagram.com/kipper.dev",
        imageUrl:"img/FERNANDAKIPPER.jpg",
    },
    {
        nome: "Leticia Baldin",
        link: "https://instagram.com/lletcode",
        imageUrl:"img/LETICIABALDIN.jpg",
    },
    {
        nome: "Leticia Baldin",
        link: "https://instagram.com/lletcode",
        imageUrl:"img/LETICIABALDIN.jpg",
    },
    {
        nome: "Leticia Baldin",
        link: "https://instagram.com/lletcode",
        imageUrl:"img/LETICIABALDIN.jpg",
    },
    {
        nome: "Diana",
        link: "https://instagram.com/dianacodes",
        imageUrl:"img/DIANA.jpg",
    },
    {
        nome: "Moni Hillman",
        link: "https://instagram.com/monihillman",
        imageUrl:"img/MONIHILLMAN.jpg",
    },
    {
        nome: "Stephanie Cardoso",
        link: "https://instagram.com/dev_steph",
        imageUrl:"img/STHEPHANIECARDOSO.jpg",
    },
    {
        nome: "Giulia Bordignon",
        link: "https://instagram.com/spacecoding",
        imageUrl:"img/GIULIABORDINGON.jpg",
    },
    {
        nome: "Giulia Bordignon",
        link: "https://instagram.com/spacecoding",
        imageUrl:"img/GIULIABORDINGON.jpg",
    },
    {
        nome: "Giulia Bordignon",
        link: "https://instagram.com/spacecoding",
        imageUrl:"img/GIULIABORDINGON.jpg",
    },
    {
        nome: "Giulia Bordignon",
        link: "https://instagram.com/spacecoding",
        imageUrl:"img/GIULIABORDINGON.jpg",
    },
    {
        nome: "Giulia Bordignon",
        link: "https://instagram.com/spacecoding",
        imageUrl:"img/GIULIABORDINGON.jpg",
    },
    {
        nome: "Duda Tech",
        link: "https://instagram.com/dudatech.oficial",
        imageUrl:"img/DUDATECH.jpg",
    }
]

function CriarCardMulheres(item) {
    let criar_div = document.createElement("div");
    let criar_linktag = document.createElement("a");
    const img_mulher = document.createElement("div");
    const label_mulher = document.createElement("div");
    div_cards_mulheres.appendChild(criar_linktag);
    criar_linktag.appendChild(criar_div)
    criar_div.className = "card-mulher";
    criar_div.appendChild(img_mulher);
    img_mulher.className = "img-mulher";
    criar_div.appendChild(label_mulher);
    label_mulher.className = "label-mulher"
    label_mulher.innerText = item.nome;
    img_mulher.style.backgroundImage = `url(${item.imageUrl})`;
    criar_linktag.href = `${item.link}`
}
db_mulheres.map(function (item) {
    CriarCardMulheres(item)
})