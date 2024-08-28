const div_cards_videos = document.querySelector('div.cards-videoaulas');
const div_cards_frases = document.querySelector('div.cards-frases');
const db_videos = [
    {
        channel: "Codigo Fonte TV",
        description: "Perdeu a Motivação para Programar? ENTÃO ASSISTA ESSE VÍDEO!",
        imageUrl: "https://i.ytimg.com/vi/Q5XQWBJoDlQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCaCCkrKuzoIvPdiolZe6Ski9wMuw",
        link: "https://www.youtube.com/watch?v=Q5XQWBJoDlQ",
    },
    {
        channel: "Codigo Fonte TV",
        description: "Mulher + Tecnologia: Combinação Perfeita",
        imageUrl: "https://i.ytimg.com/vi/yJTsA4hC_fw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAz3mY26pI27_l03o-tZetyYRUYOg",
        link: "https://www.youtube.com/watch?v=yJTsA4hC_fw",
    },
    {
        channel: "Code By Duda",
        description: "Como é ser mulher na T.I",
        imageUrl: "https://i.ytimg.com/vi/Nnmcgy0ch1E/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBE8pnQmhsEKrII31tFbdnxWU5rUA",
        link: "https://www.youtube.com/watch?v=Nnmcgy0ch1E",
    },
    {
        channel: "Motivação Feminina",
        description: "ATITUDES QUE UMA GRANDE MULHER DEVE TER (Motivação Feminina)",
        imageUrl: "https://i.ytimg.com/vi/jrHCpXHd5AQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCNeuGG9SvYYtqW1JVS0fqTSMSwGg",
        link: "https://www.youtube.com/watch?v=jrHCpXHd5AQ",
    },
    {
        channel: "DIO",
        description: "Como virei programadora em MENOS DE <br>1 ANO sem computador",
        imageUrl: "https://i.ytimg.com/vi/iQWViNgGpY4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCgSUs3Hgh5Lo684xVi-s_yiVNxhw",
        link: "https://www.youtube.com/watch?v=iQWViNgGpY4",
    },
]
const db_frases = [
    {
        autora:"Estée Lauder",
        text:"Eu não sonhei com sucesso. Eu trabalhei para ele.",
    },
    {
        autora:"Barbara Corcoran",
        text:"Os meus maiores sucessos chegaram no seguimento de grandes fracassos.",
    },
    {
        autora:"Madre Teresa de Calcutá",
        text:"Não espere por grandes líderes; faça você mesmo, pessoa a pessoa. Seja leal às ações pequenas porque é nelas que está a sua força.",
    },
    {
        autora:"Ginni Rometty",
        text:"Aprendi a aceitar desafios que nunca pensei fazer antes. Sucesso e conforto não podem coexistir.",
    },
    {
        autora:"Marissa Mayer",
        text:"Sempre fiz algo que eu achava que estava pouco preparada para fazer. Quando você tem um momento de incerteza mas persiste, é aí que você consegue avançar.",
    },
    {
        autora:"Anne Sweeney",
        text:"Defina sucesso com seus próprios termos, o alcance segundo as suas próprias regras e viva uma vida da qual você se orgulhe.",
    },
    {
        autora:"Arianna Huffington",
        text:"Temos que aceitar que nem sempre tomaremos as melhores decisões, que vamos errar muito - perceber que o fracasso não é o contrário de sucesso, já é parte do sucesso.",
    },
]
function CriarCardVideos(item) {
    let criar_div = document.createElement("div");
    const thumb_video = document.createElement("div");
    const channel_video = document.createElement("div");
    const description_video = document.createElement("div");

    const btn_play = document.createElement("div");
    div_cards_videos.appendChild(criar_div);
    criar_div.className = "div-videoaula";
    criar_div.appendChild(thumb_video);
    thumb_video.className = "videoaula-thumb";
    criar_div.appendChild(channel_video);
    channel_video.className = "videoaula-channel";
    criar_div.appendChild(description_video);
    description_video.className = "videoaula-description";


    btn_play.className = "videoaula-button-play";
    description_video.innerHTML = item.description;
    channel_video.innerText = item.channel;
    thumb_video.style.backgroundImage = `url(${item.imageUrl})`;
    description_video.appendChild(btn_play);
    btn_play.className = "videoaula-button-play";
    btn_play.onclick = () => {
        window.open(item.link, '_blank');
    }
}
function CriarCardFrases(item){
    let criar_div = document.createElement("div");
    const titulo_frase = document.createElement("div");
    const frase = document.createElement("div");
    div_cards_frases.appendChild(criar_div);
    criar_div.className = "card-frase";
    criar_div.appendChild(titulo_frase);
    titulo_frase.className = "titulo-frase";
    criar_div.appendChild(frase);
    frase.className = "frase-card"
    titulo_frase.innerHTML = item.autora;
    frase.innerHTML = item.text;
}
db_videos.map(function (item) {
    CriarCardVideos(item)
})
db_frases.map(function (item) {
    CriarCardFrases(item)
})