export default () => {
    const obj = {
        clones: [
            {
                name: "Netflix Clone - ReactJS",
                gif: "https://github.com/guilhermevialle/Netflix-Clone-ReactJS/blob/main/captures/netflixcutted.gif?raw=true",
                img: "https://github.com/guilhermevialle/Netflix-Clone-ReactJS/blob/main/captures/homepage.jpg?raw=true",
            },
            {
                name: "WhatsApp Clone - ReactJS",
                gif: "https://github.com/guilhermevialle/WhatsApp-Clone-ReactJS/blob/main/captures/rec1modgif.gif?raw=true",
                img: "https://github.com/guilhermevialle/WhatsApp-Clone-ReactJS/blob/main/captures/cap2.jpg?raw=true",
            },
            {
                name: "Windows 10 Interface - Pure JS",
                gif: "https://github.com/guilhermevialle/Windows-Interface-Clone/blob/main/Windows%20Interface/Preview/gif.gif?raw=true",
                img: "https://github.com/guilhermevialle/Windows-Interface-Clone/blob/main/Windows%20Interface/Preview/preview.png?raw=true",
            },
            {
                name: "Youtube Interface Clone - Pure JS",
                gif: "https://github.com/guilhermevialle/Clone-Youtube/blob/main/Gif/gif.gif?raw=true",
                img: "https://github.com/guilhermevialle/Clone-Youtube/blob/main/Screenshot/capture.png?raw=true",
            },
            {
                name: "Reminer App (based on iOS system)",
                gif: "https://github.com/guilhermevialle/Todo-ReactJS/blob/main/captures/rec.gif?raw=true",
                img: "https://9to5mac.com/wp-content/uploads/sites/6/2019/10/how-to-change-colors-icons-reminders-lists-iphone-ipad-walkthrough-4.jpg?quality=82&strip=all",
            },
        ],
        personal: [
            {
                name: "Music Landing Page - Pure JS",
                gif: "https://github.com/guilhermevialle/Music-Template-Website/blob/main/Gif/gif1.gif?raw=true",
                img: "https://github.com/guilhermevialle/Music-Template-Website/blob/main/Gif/capture.png?raw=true",
            },
            {
                name: "Movies Universe (Movies App)",
                gif: "https://github.com/guilhermevialle/MoviesUniverse/blob/main/Movies%20Universe/Gif/gif1.gif?raw=true",
                img: "https://github.com/guilhermevialle/MoviesUniverse/blob/main/Movies%20Universe/Screenshot/capture.png?raw=true",
            },
            {
                name: "Grubbles (Music App)",
                gif: "https://github.com/guilhermevialle/Music-Player-React/blob/main/media/gifs/gif.gif?raw=true",
                img: "https://github.com/guilhermevialle/Music-Player-React/blob/main/media/Screenshots/capture.png?raw=true",
            },
            {
                name: "Gruttles (Music App)",
                gif: "https://github.com/guilhermevialle/MinimalistMusicPlayerv5.0/blob/main/Minimalist%20Music%20Player%20-%20v5.0/gifs/gif.gif?raw=true",
                img: "https://github.com/guilhermevialle/MinimalistMusicPlayerv5.0/blob/main/Minimalist%20Music%20Player%20-%20v5.0/Screenshots/capture2.PNG?raw=true",
            },
            {
                name: "Denan Gallery (Images App)",
                gif: "https://github.com/guilhermevialle/DenanGallery/blob/main/DenanGallery/Gif/gif2.gif?raw=true",
                img: "https://github.com/guilhermevialle/DenanGallery/blob/main/DenanGallery/Screenshot/capture3.png?raw=true",
            },
        ],
        getAll: () => [...obj.clones].concat(...obj.personal),
    };

    return obj;
};
