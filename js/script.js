let textapi = document.getElementById("maintext");
let author = document.getElementById("mainauthor")

let button = document.getElementById("mainbutton")

let apiUrl = "https://api.quotable.io/random";

async function apifunc(){
    try{
    const response = await fetch(apiUrl);
    const data = await response.json();
    const textqoute = data.content;
    const authorqoute = data.author;
    textapi.innerText = textqoute
    author.innerText = authorqoute;
    console.log(data)
}catch(err){
    console.log(err);
}

}
button.addEventListener("click", apifunc)
