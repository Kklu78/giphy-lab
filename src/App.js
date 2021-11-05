import './App.css';
import { useState, useEffect } from 'react'
import GIF from './GIF/GIF';


function App() {
  const [searchUrl, setSearch] = useState(`https://api.giphy.com/v1/gifs/random?api_key=bQVE2vBdlR27e3JDxOk0nir9v9ka9KOk&rating=g`);
  const [gif, setGif] = useState({});
  const [favId, setFavId] = useState('')

  function newGif(newSearch) {
    searchUrl.slice(-2) === 'pg' ? 
    setSearch(`https://api.giphy.com/v1/gifs/random?api_key=bQVE2vBdlR27e3JDxOk0nir9v9ka9KOk&tag=${newSearch}&rating=g`)
    :
    setSearch(`https://api.giphy.com/v1/gifs/random?api_key=bQVE2vBdlR27e3JDxOk0nir9v9ka9KOk&tag=${newSearch}&rating=pg`)
  }

  function randomGif() {
    searchUrl.slice(-2) === 'pg' ? 
    setSearch(`https://api.giphy.com/v1/gifs/random?api_key=bQVE2vBdlR27e3JDxOk0nir9v9ka9KOk&rating=g`)
    :
    setSearch(`https://api.giphy.com/v1/gifs/random?api_key=bQVE2vBdlR27e3JDxOk0nir9v9ka9KOk&rating=pg`)
  }

  function saveGif(id) {
    setFavId(id)
  }

  function viewGif(id) {
    setSearch(`https://api.giphy.com/v1/gifs/${favId}?api_key=bQVE2vBdlR27e3JDxOk0nir9v9ka9KOk`)

  }

  useEffect(() => {
    const url = searchUrl
    fetch(url)
    .then(res => res.json())
    .then(data => setGif(data))
  }, [searchUrl])
  
  return (
    <div className="App">
      <GIF data={gif} newGif={newGif} randomGif={randomGif} saveGif={saveGif} viewGif={viewGif} favGif={favId}/>
    </div>
  );
}

export default App;
