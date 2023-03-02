const btnEl = document.getElementById("btn")
const emojiNameEl = document.getElementById("emoji-name")

const emoji = [];

async function getEmoji(){
    let response = await fetch('https://emoji-api.com/emojis?access_key=b7b967f01412979b5a1cc989e65f8a17d116614c')

    data = await response.json()

    for(i=0;i<1500;i++){
        emoji.push({
            img: data[i].character,
            name: data[i].unicodeName,
            
        });   
    }
}

getEmoji();

btnEl.addEventListener("click", function(){
    try{
        const random = Math.floor(Math.random()*emoji.length);
        btnEl.innerText= emoji[random].img
        emojiNameEl.innerText=emoji[random].name
    }
    catch{

    }
})