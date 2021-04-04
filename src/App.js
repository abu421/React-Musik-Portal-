import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Music from './Components/Music/Music';
import Pagination from './Components/Pagination/Pagination';
import {getMusic} from './NapsterApi/api';

function App() {

  // States
  const [page, setPage] = useState(1);
  const [music, setMusic] = useState([]);
  const [genreId, setGenreId] = useState('g.115'); //g.115 -> pop id

  useEffect( () => {

    getMusic(genreId, page).then(response => {
        setMusic([...response.tracks]); 
    });

  }, 
  [genreId, page]);

  // JSX
  return (
    <div className="app_container">
      <Navbar setGenreId={setGenreId} setPage={setPage} />
      <Music music={music} />
      <Pagination setPage={setPage} page={page} />
    </div>
  );

}

export default App;
