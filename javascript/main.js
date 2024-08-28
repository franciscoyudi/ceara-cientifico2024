
const div_cards_mulheres = document.querySelector('div.cards-mulheres');
const div_cards_videos = document.querySelector('div.cards-videoaulas');
const div_cards_sites = document.querySelector('div.cards-sites');
const div_cards_cursos = document.querySelector('div.cards-cursos');




const db_mulheres = [
    {
        nome: "Karol Attekita",
        link: "https://www.instagram.com/attekitadev/",
        imageUrl: "img/ATTEKITA.jpg",
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
        nome: "Duda Tech",
        link: "https://instagram.com/dudatech.oficial",
        imageUrl:"img/DUDATECH.jpg",
    }
]
const db_videos = [
    {
        channel: "Curso em Video",
        description: "Playlist de HTML e CSS",
        imageUrl: "https://i.ytimg.com/vi/Ejkb_YpuHWs/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA6236wbnIBXu9BMu7prRmlxLFsYw",
        link: "https://www.youtube.com/watch?v=Ejkb_YpuHWs&list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n",
    },
    {
        channel: "DIO",
        description: "Como virei programadora em MENOS DE <br>1 ANO sem computador",
        imageUrl: "https://i.ytimg.com/vi/iQWViNgGpY4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCgSUs3Hgh5Lo684xVi-s_yiVNxhw",
        link: "https://www.youtube.com/watch?v=iQWViNgGpY4",
    },
    {
        channel: "Curso em Video",
        description: "Curso de Python",
        imageUrl: "https://i.ytimg.com/vi/S9uPNppGsGo/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBdufuoJdaVhVi1j6gQJgfUqD0T8w",
        link: "https://www.youtube.com/watch?v=S9uPNppGsGo&list=PLvE-ZAFRgX8hnECDn1v9HNTI71veL3oW0",
    },
    {
        channel: "Matheus Battisti - Hora de Codar",
        description: "Se não aprender JAVA agora, desista. - Curso de Java",
        imageUrl: "https://i.ytimg.com/vi/TkD0QMyBa28/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBmwloGYr9I3QN60TY32nbEwkDpXA",
        link: "https://www.youtube.com/watch?v=TkD0QMyBa28&list=PLnDvRpP8BneysKU8KivhnrVaKpILD3gZ6",
    },
    {
        channel: "UnSet",
        description: "Playlist curso de PHP",
        imageUrl: "https://i.ytimg.com/vi/O73xbQvGhHk/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDtoZmJ-2U-IGPKnOeMJ1RPckLQ2g",
        link: "https://www.youtube.com/watch?v=O73xbQvGhHk&list=PL0N5TAOhX5E9eJ9Ix6YUIgEw3lNmaIEE9",
    },
]
const db_sites = [

    {
        labelSite: "Code academy",
        link:"https://www.codecademy.com/",
        imageUrl: "https://yt3.googleusercontent.com/Vzv2OJNdnqMMuBwBp4RMI-4Mp5V3ouabPv0yO69EuxHxtazM12v7DFEOOna9ZEbcS3go-0hb=s900-c-k-c0x00ffffff-no-rj",
    },
    {
        labelSite: "CodeWars",
        link:"https://www.codewars.com/",
        imageUrl: "https://cdn.prod.website-files.com/6674f0cdb5b7b401612cf015/6674f0cdb5b7b401612cf0ee_codewars-by-andela-dark.svg",
    },
    {
        labelSite: "Hackr",
        link:"https://hackr.io/",
        imageUrl: "https://hackr.io/assets/images/logo-hi-res.png",
    },
    {
        labelSite: "Flexbox <br>Adventure",
        link:"https://codingfantasy.com/games/flexboxadventure",
        imageUrl: "img/flexboxAD.png",
    },
    {
        labelSite: "Flexbox Froggy",
        link:"https://flexboxfroggy.com/",
        imageUrl: "img/flexboxFR.png",
    },
    {
        labelSite: "CodeEasy",
        link:"https://codeeasy.io/courses",
        imageUrl: "https://codeeasy.io/images/logo/logo_white_theme.svg",
    },
]
const db_cursos = [

    {
        nome: "Curso de Inglês para Iniciantes",
        link: "https://www.cursoemvideo.com/curso/curso-de-ingles-para-iniciantes-modulo-1-beginners-gratis-e-completo/#google_vignette",
        imageUrl:"https://www.cursoemvideo.com/wp-content/uploads/bb-plugin/cache/ingles-mod01-circle-114a5715791cc9adcc7d170184e8e30e-5d48cb37edbef.png",
    },
    {
        nome: "HTML5 [40 Horas]",
        link: "https://www.cursoemvideo.com/curso/html5/",
        imageUrl:"https://www.cursoemvideo.com/wp-content/uploads/2019/08/html5-300x300.jpg",
    },
    {
        nome: "Curso HTML5 e CSS3: módulo 1 de 5 [40 HORAS]",
        link: "https://www.cursoemvideo.com/curso/html5-css3-modulo1/",
        imageUrl:"https://www.cursoemvideo.com/wp-content/uploads/bb-plugin/cache/htmlcss-vip-mod1-circle-c2e334d18a407d8cdfd1701f0e163c77-5d48cb37edbef.jpg",
    },
    {
        nome: "Python 3 – Mundo 1 [40 Horas]",
        link: "https://www.cursoemvideo.com/curso/python-3-mundo-1/",
        imageUrl:"https://www.cursoemvideo.com/wp-content/uploads/bb-plugin/cache/Python3–Mundo1-circle-fe9ce6bfeaf0ec1069476ff395ea189a-5d48cb37edbef.png",
    },
    {
        nome: "Javascript [40 Horas]",
        link: "https://www.cursoemvideo.com/curso/javascript/",
        imageUrl:"https://www.cursoemvideo.com/wp-content/uploads/bb-plugin/cache/javascript-circle-dc92b56e539139ec2bf42ebf8393803c-5d48cb37edbef.jpg",
    },
    {
        nome: "Curso de PHP Moderno: Módulo 01",
        link: "https://www.cursoemvideo.com/curso/curso-de-php-moderno-modulo-01/",
        imageUrl:"https://www.cursoemvideo.com/wp-content/uploads/bb-plugin/cache/php-moderno1-circle-fc3e7477a5ad373ac169b092a7493ef1-5d48cb37edbef.png",
    },
    {
        nome: "PHP POO [40 Horas]",
        link: "https://www.cursoemvideo.com/curso/php-poo/",
        imageUrl:"https://www.cursoemvideo.com/wp-content/uploads/bb-plugin/cache/poo-php-circle-603729a57e53060cd9f08e8ba15b001e-5d48cb37edbef.jpg",
    },
    {
        nome: "WordPress Módulo 1 [40 Horas]",
        link: "https://www.cursoemvideo.com/curso/wordpress-2019-profissional-com-gutenberg/",
        imageUrl:"https://www.cursoemvideo.com/wp-content/uploads/bb-plugin/cache/wordpress-md01-circle-3685d1e8de8efca756a066abe1425e22-5d48cb37edbef.png",
    },
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
    criar_linktag.target = "_blank"
}
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
function CriarCardSitesGratuitos(item) {
    let criar_div = document.createElement("div");
    const site_logo = document.createElement("div");
    const site_label = document.createElement("div");
    div_cards_sites.appendChild(criar_div);
    criar_div.className = "site-ensino";
    criar_div.appendChild(site_logo);
    site_logo.className = "site-logo";
    criar_div.appendChild(site_label);
    site_label.className = "site-label"
    site_logo.style.backgroundImage = `url(${item.imageUrl})`;
    site_label.innerHTML = item.labelSite;
    criar_div.onclick = () => {
        window.open(item.link, '_blank');
    }
    if (item.labelSite == "CodeEasy") {
        site_logo.style.backgroundColor = "white"
    }
}
function CriarCardCursosGratuitos(item) {
    let criar_div = document.createElement("div");
    const curso_logo = document.createElement("div");
    const curso_label = document.createElement("div");
    div_cards_cursos.appendChild(criar_div);
    criar_div.className = "card-cursos";
    criar_div.appendChild(curso_logo);
    curso_logo.className = "cursos-image";
    criar_div.appendChild(curso_label);
    curso_label.className = "title-curso"
    curso_logo.style.backgroundImage = `url(${item.imageUrl})`;
    curso_label.innerText = item.nome;
    criar_div.onclick = () => {
        window.open(item.link, '_blank');
    }
}
db_mulheres.map(function (item) {
        CriarCardMulheres(item)
})
db_videos.map(function (item) {
    CriarCardVideos(item)
})
db_sites.map(function (item) {

    CriarCardSitesGratuitos(item)
})
db_cursos.map(function (item) {
    CriarCardCursosGratuitos(item)
})



