

const div_cards_videos = document.querySelector('div.cards-videoaulas');




const db_videos = [
    {
        channel: "Curso em Video",
        description: "Playlist de HTML e CSS",
        imageUrl: "https://i.ytimg.com/vi/Ejkb_YpuHWs/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA6236wbnIBXu9BMu7prRmlxLFsYw",
        link: "https://www.youtube.com/watch?v=Ejkb_YpuHWs&list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n",
    },
    {
        channel: "Curso em Video",
        description: "Playlist de HTML e CSS",
        imageUrl: "https://i.ytimg.com/vi/Ejkb_YpuHWs/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA6236wbnIBXu9BMu7prRmlxLFsYw",
        link: "https://www.youtube.com/watch?v=Ejkb_YpuHWs&list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n",
    },
    {
        channel: "Curso em Video",
        description: "Playlist de HTML e CSS",
        imageUrl: "https://i.ytimg.com/vi/Ejkb_YpuHWs/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA6236wbnIBXu9BMu7prRmlxLFsYw",
        link: "https://www.youtube.com/watch?v=Ejkb_YpuHWs&list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n",
    },
    {
        channel: "Matheus Battisti - Hora de Codar",
        description: "Se não aprender JAVA agora,<br> desista. - Curso de Java",
        imageUrl: "https://i.ytimg.com/vi/TkD0QMyBa28/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBmwloGYr9I3QN60TY32nbEwkDpXA",
        link: "https://www.youtube.com/watch?v=TkD0QMyBa28&list=PLnDvRpP8BneysKU8KivhnrVaKpILD3gZ6",
    },
    {
        channel: "Matheus Battisti - Hora de Codar",
        description: "Se não aprender JAVA agora,<br> desista. - Curso de Java",
        imageUrl: "https://i.ytimg.com/vi/TkD0QMyBa28/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBmwloGYr9I3QN60TY32nbEwkDpXA",
        link: "https://www.youtube.com/watch?v=TkD0QMyBa28&list=PLnDvRpP8BneysKU8KivhnrVaKpILD3gZ6",
    },
    {
        channel: "Matheus Battisti - Hora de Codar",
        description: "Se não aprender JAVA agora,<br> desista. - Curso de Java",
        imageUrl: "https://i.ytimg.com/vi/TkD0QMyBa28/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBmwloGYr9I3QN60TY32nbEwkDpXA",
        link: "https://www.youtube.com/watch?v=TkD0QMyBa28&list=PLnDvRpP8BneysKU8KivhnrVaKpILD3gZ6",
    },
    {
        channel: "UnSet",
        description: "Playlist curso de PHP",
        imageUrl: "https://i.ytimg.com/vi/O73xbQvGhHk/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDtoZmJ-2U-IGPKnOeMJ1RPckLQ2g",
        link: "https://www.youtube.com/watch?v=O73xbQvGhHk&list=PL0N5TAOhX5E9eJ9Ix6YUIgEw3lNmaIEE9",
    },
    {
        channel: "UnSet",
        description: "Playlist curso de PHP",
        imageUrl: "https://i.ytimg.com/vi/O73xbQvGhHk/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDtoZmJ-2U-IGPKnOeMJ1RPckLQ2g",
        link: "https://www.youtube.com/watch?v=O73xbQvGhHk&list=PL0N5TAOhX5E9eJ9Ix6YUIgEw3lNmaIEE9",
    },
    {
        channel: "UnSet",
        description: "Playlist curso de PHP",
        imageUrl: "https://i.ytimg.com/vi/O73xbQvGhHk/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDtoZmJ-2U-IGPKnOeMJ1RPckLQ2g",
        link: "https://www.youtube.com/watch?v=O73xbQvGhHk&list=PL0N5TAOhX5E9eJ9Ix6YUIgEw3lNmaIEE9",
    },
    {
        channel: "Curso em Video",
        description: "Curso de Python",
        imageUrl: "https://i.ytimg.com/vi/S9uPNppGsGo/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBdufuoJdaVhVi1j6gQJgfUqD0T8w",
        link: "https://www.youtube.com/watch?v=S9uPNppGsGo&list=PLvE-ZAFRgX8hnECDn1v9HNTI71veL3oW0",
    },
    {
        channel: "Curso em Video",
        description: "Curso de Python",
        imageUrl: "https://i.ytimg.com/vi/S9uPNppGsGo/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBdufuoJdaVhVi1j6gQJgfUqD0T8w",
        link: "https://www.youtube.com/watch?v=S9uPNppGsGo&list=PLvE-ZAFRgX8hnECDn1v9HNTI71veL3oW0",
    },
    {
        channel: "Curso em Video",
        description: "Curso de Python",
        imageUrl: "https://i.ytimg.com/vi/S9uPNppGsGo/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBdufuoJdaVhVi1j6gQJgfUqD0T8w",
        link: "https://www.youtube.com/watch?v=S9uPNppGsGo&list=PLvE-ZAFRgX8hnECDn1v9HNTI71veL3oW0",
    },
    {
        channel: "Curso em Video",
        description: "Curso de Python",
        imageUrl: "https://i.ytimg.com/vi/S9uPNppGsGo/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBdufuoJdaVhVi1j6gQJgfUqD0T8w",
        link: "https://www.youtube.com/watch?v=S9uPNppGsGo&list=PLvE-ZAFRgX8hnECDn1v9HNTI71veL3oW0",
    },
    {
        channel: "Curso em Video",
        description: "Curso de Python",
        imageUrl: "https://i.ytimg.com/vi/S9uPNppGsGo/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBdufuoJdaVhVi1j6gQJgfUqD0T8w",
        link: "https://www.youtube.com/watch?v=S9uPNppGsGo&list=PLvE-ZAFRgX8hnECDn1v9HNTI71veL3oW0",
    },
      {
        channel: "DIO",
        description: "Como virei programadora em <br>MENOS DE 1 ANO sem computador<br> | Mulheres na TI",
        imageUrl: "https://i.ytimg.com/vi/iQWViNgGpY4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCgSUs3Hgh5Lo684xVi-s_yiVNxhw",
        link: "https://www.youtube.com/watch?v=iQWViNgGpY4",
    }, 
      {
        channel: "DIO",
        description: "Como virei programadora em <br>MENOS DE 1 ANO sem computador<br> | Mulheres na TI",
        imageUrl: "https://i.ytimg.com/vi/iQWViNgGpY4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCgSUs3Hgh5Lo684xVi-s_yiVNxhw",
        link: "https://www.youtube.com/watch?v=iQWViNgGpY4",
    }, 
      {
        channel: "DIO",
        description: "Como virei programadora em <br>MENOS DE 1 ANO sem computador<br> | Mulheres na TI",
        imageUrl: "https://i.ytimg.com/vi/iQWViNgGpY4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCgSUs3Hgh5Lo684xVi-s_yiVNxhw",
        link: "https://www.youtube.com/watch?v=iQWViNgGpY4",
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
    btn_play.addEventListener("click",() =>{
        window.location.href = item.link;
    })
}


db_videos.map(function (item) {
    CriarCardVideos(item)
})

