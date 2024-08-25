const div_cards_sites = document.querySelector('div.cards-sites');
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
        labelSite: "CodeWars",
        link:"https://www.codewars.com/",
        imageUrl: "https://cdn.prod.website-files.com/6674f0cdb5b7b401612cf015/6674f0cdb5b7b401612cf0ee_codewars-by-andela-dark.svg",
    },
    {
        labelSite: "CodeWars",
        link:"https://www.codewars.com/",
        imageUrl: "https://cdn.prod.website-files.com/6674f0cdb5b7b401612cf015/6674f0cdb5b7b401612cf0ee_codewars-by-andela-dark.svg",
    },
    {
        labelSite: "CodeWars",
        link:"https://www.codewars.com/",
        imageUrl: "https://cdn.prod.website-files.com/6674f0cdb5b7b401612cf015/6674f0cdb5b7b401612cf0ee_codewars-by-andela-dark.svg",
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
        labelSite: "Flexbox<br> Adventure",
        link:"https://codingfantasy.com/games/flexboxadventure",
        imageUrl: "img/flexboxAD.png",
    },
    {
        labelSite: "Flexbox<br> Adventure",
        link:"https://codingfantasy.com/games/flexboxadventure",
        imageUrl: "img/flexboxAD.png",
    },
    {
        labelSite: "Flexbox<br> Adventure",
        link:"https://codingfantasy.com/games/flexboxadventure",
        imageUrl: "img/flexboxAD.png",
    },
    {
        labelSite: "Flexbox<br> Adventure",
        link:"https://codingfantasy.com/games/flexboxadventure",
        imageUrl: "img/flexboxAD.png",
    },
    {
        labelSite: "Flexbox<br> Adventure",
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
    {
        labelSite: "CodeEasy",
        link:"https://codeeasy.io/courses",
        imageUrl: "https://codeeasy.io/images/logo/logo_white_theme.svg",
    },
    {
        labelSite: "CodeEasy",
        link:"https://codeeasy.io/courses",
        imageUrl: "https://codeeasy.io/images/logo/logo_white_theme.svg",
    },
    {
        labelSite: "CodeEasy",
        link:"https://codeeasy.io/courses",
        imageUrl: "https://codeeasy.io/images/logo/logo_white_theme.svg",
    },
    {
        labelSite: "CodeEasy",
        link:"https://codeeasy.io/courses",
        imageUrl: "https://codeeasy.io/images/logo/logo_white_theme.svg",
    },
    {
        labelSite: "CodeEasy",
        link:"https://codeeasy.io/courses",
        imageUrl: "https://codeeasy.io/images/logo/logo_white_theme.svg",
    },
    {
        labelSite: "CodeEasy",
        link:"https://codeeasy.io/courses",
        imageUrl: "https://codeeasy.io/images/logo/logo_white_theme.svg",
    },
    {
        labelSite: "CodeEasy",
        link:"https://codeeasy.io/courses",
        imageUrl: "https://codeeasy.io/images/logo/logo_white_theme.svg",
    },
    {
        labelSite: "CodeEasy",
        link:"https://codeeasy.io/courses",
        imageUrl: "https://codeeasy.io/images/logo/logo_white_theme.svg",
    },
]

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
db_sites.map(function (item) {
    CriarCardSitesGratuitos(item)
})