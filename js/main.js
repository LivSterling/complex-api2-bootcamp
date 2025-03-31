//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)


function getFetch(){
  const title = document.getElementById('song').value
  const artist = document.getElementById('artist').value
  const url = `https://api.lyrics.ovh/v1/${artist}/${title}`
  const cloudUrl = `https://quickchart.io/wordcloud?format=png&height=1000&width=1000`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        const lyrics = data.lyrics
        
        fetch(`${cloudUrl}&text=${lyrics}`)
      .then(res => res.blob()) // parse response as JSON
      .then(blob => {
        console.log(blob)
        const imageUrl = URL.createObjectURL(blob); 
        const img = document.createElement('img'); 
        img.src = imageUrl; 
        document.body.appendChild(img); 
      })

      })

      

      .catch(err => {
          console.log(`error ${err}`)
      });
}

