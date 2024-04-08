console.log ('hello')

let songIndex=0;
let songiteam= Array.from (document.getElementsByClassName('songItem'));
let audio = new Audio('music/1.mp3');
let masterplay=document.getElementById("masterplay");
let gift =document.getElementById('gift');
let mastersongname =document.getElementById('mastersongname');
let myprogreebar=document.getElementById('myprogressbar');



let songs =[
    {songName:"Tere Siva Jag Mein Cafe",filePath: "music/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Mohabat MA Had Ko Par Kiya",filePath: "music/2.mp3",coverPath:"covers/2.jpg"},
    {songName:"queen of Music",filePath: "music/3.mp3",coverPath:"covers/3.jpg"},
    {songName:"ya safar mera",filePath: "music/4.mp3",coverPath:"covers/4.jpg"},
    {songName:"MERI JAAN",filePath: "music/5.mp3",coverPath:"covers/5.jpg"},
    {songName:"MAGAR ANA",filePath: "music/6.mp3",coverPath:"covers/6.jpg"},
]


// audioelment.play();
masterplay.addEventListener('click',()=>{
    if(audio.paused || audio.currentTime<=0){
    audio.play();
        masterplay.classList.remove('fa-play')
        masterplay.classList.add('fa-pause')
        gift.style.opacity=1;
    }
    else{
        audio.pause();
        masterplay.classList.remove('fa-pause')
        masterplay.classList.add('fa-play') 
        gift.style.opacity=0;
    }
})

//listen to event
audio.addEventListener('timeupdate',()=>{

    progress =parseInt((audio.currentTime/audio.duration) *100)
  
    myprogreebar.value=progress;
})

myprogreebar.addEventListener('change',()=>{
    audio.currentTime=myprogreebar.value *audio.duration/100;
})


songiteam.forEach((element,i)=>{
   

element.getElementsByTagName("img")[0].src = songs[i].coverPath;
element.getElementsByClassName('songname')[0].innerText = songs[i].songName;

});
const makeallplays= ()=>{
    mastersongname.innerText = songs[songIndex].songName
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.classList.remove('fa-pause')
    element.classList.add('fa-play')
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{

makeallplays();
songIndex=parseInt (e.target.id)

e.target.classList.remove('fa-play')
e.target.classList.add('fa-pause')
audio.src=`music/${songIndex+1}.mp3`;
audio.play()
masterplay.classList.remove('fa-play')
masterplay.classList.add('fa-pause') 

audio.currentTime = 0;
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>6){
        songIndex=0
    }else{
        songIndex +=1;
    }
    audio.src=`music/${songIndex+1}.mp3`;
    audio.play()
    mastersongname.innerText = songs[songIndex].songName
    masterplay.classList.remove('fa-play')
    masterplay.classList.add('fa-pause') 
    audio.currentTime = 0;
})

document.getElementById('pervias').addEventListener('click',()=>{
    if(songIndex>0){
        songIndex=0
    }else{
        songIndex -=1;
    }
    audio.src=`music/${songIndex+1}.mp3`;
    audio.play()
    mastersongname.innerText = songs[songIndex].songName
    masterplay.classList.remove('fa-play')
    masterplay.classList.add('fa-pause') 
    audio.currentTime = 0;
})