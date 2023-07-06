console.log("hello");
//initialize variables
let songIndex = 0;
let audioElement = new Audio('music/1.mp3');
let masterPlay = document.getElementById('masterplay');
let progressBar = document.getElementById('prog-bar');
let btn = document.getElementsByClassName('btn');
let gif = document.getElementById('sn-gf');
let lft = document.getElementById('left');
let rgt = document.getElementById('right');
let cardImg = document.getElementById('card-img');
// let carImage = new Image('images/cover1.jpg');
let cardText = document.getElementById("sn-txt");
let songs = 
[
    {songName: "Makudonarudo", filePath: "music/1.mp3"},
    {songName: "Makudonarudo", filePath: "music/2.mp3"},
    {songName: "Makudonarudo", filePath: "music/3.mp3"},
    {songName: "Makudonarudo", filePath: "music/4.mp3"},
    {songName: "Makudonarudo", filePath: "music/5.mp3"},
    {songName: "Makudonarudo", filePath: "music/6.mp3"},
    {songName: "Makudonarudo", filePath: "music/7.mp3"},
]
let ctext =
[
    {txt: "Dilbara x Makudonarudo"},
    {txt: "Montagem Orquestra Sinfonica"},
    {txt: "RIDIN CLEAN- DJPaul(feat.PHONK)"},
    {txt: "SXMPRA-NIGHTMARE(Prod.Dozy)"},
    {txt: "TOXIC"},
    {txt: "GHOSTEMANE - FED UP"},
    {txt: "NF - When I Grow Up"},
]
let cover =
[
    {coverpath: "/images/cover1.jpg"},
    {coverpath: "/images/cover3.jpg"},
    {coverpath: "/images/cover2.jpg"},
    {coverpath: "/images/cover4.jpg"},
    {coverpath: "/images/cover6.jpg"},
    {coverpath: "/images/cover5.jpg"},
    {coverpath: "/images/cover1.jpg"},
]
// audioElement.play();

//play/pause

masterPlay.addEventListener('click', ()=>
{
    if(audioElement.paused || audioElement.currentTime <=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        // masterPlay.innerText('fas fa-pause');
        gif.style.opacity = 1;
    }
    else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity = 0;
    }
}
)



//listen to events
audioElement.addEventListener('timeupdate', ()=>
{
    // console.log('time-update');
    //update seekbar
    progress = parseInt(audioElement.currentTime/audioElement.duration * 100);
    progressBar.value = progress; 
}
)
progressBar.addEventListener('change', ()=>
{
    audioElement.currentTime = progressBar.value * audioElement.duration / 100;
}
)
let pley = document.getElementsByClassName('plei');
const makeAllPLays = ()=>
{
    Array.from(pley).forEach((element)=>
    {
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}
Array.from(pley).forEach((element)=>
{
    element.addEventListener('click', (e)=>
    {
        songIndex = parseInt(e.target.id);
        makeAllPLays();
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = `music/${songIndex}.mp3`
        console.log(songIndex);
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;  
        cardImg.src = cover[songIndex-1].coverpath;
        cardText.textContent = ctext[songIndex-1].txt;
    })
})

document.getElementById('right').addEventListener('click', ()=>{
    if(songIndex > 6)
    {
        songIndex = 1;
    }
    else
    {
        songIndex += 1;
    }
    audioElement.src = `music/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    cardImg.src = cover[songIndex-1].coverpath;
    cardText.textContent = ctext[songIndex-1].txt;
    gif.style.opacity = 1; 
})
document.getElementById('left').addEventListener('click', ()=>{
    if(songIndex < 1)
    {
        songIndex = 7;
    }
    else
    {
        songIndex -= 1;
    }
    audioElement.src = `music/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    console.log(songIndex);
    cardImg.src = cover[songIndex-1].coverpath;
    cardText.textContent = ctext[songIndex-1].txt;
    gif.style.opacity = 1; 
})
