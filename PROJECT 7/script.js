const api_url = "https://api.quotable.io/random"

const qoute = document.getElementById("qoute")
const author = document.getElementById("author")


async function getQoute(url){
    const response = await fetch(url)
    var data = await response.json()
    qoute.innerHTML = data.content
    author.innerHTML = data.author
}
getQoute(api_url)

function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+qoute.innerHTML + "--- by "+author.innerHTML+"tweet window","width=600,heigth=300")
}
