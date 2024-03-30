import { useRef, useState, useEffect } from 'react';
import Library from './components/Library';
import Nav from './components/Nav';
import Player from './components/Player';
import Song from './components/Song';
import './css/app.css';
import data from './data';

function App() {
  const [libraryStatus, setLibraryStatus] = useState(false);
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isChanged, setIsChanged] = useState(true);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
    isLoaded: false,
  });
  const audioRef = useRef(null);

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animation = Math.round((roundedCurrent / roundedDuration) * 100);
    setSongInfo({...songInfo, currentTime: current, duration, animationPercentage: animation})
  };

  useEffect(() => {
    if (isPlaying) audioRef.current.play();
    // eslint-disable-next-line
  }, [currentSong]);

  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
  };

  return (
    <div className={`app ${libraryStatus ? "app-active-library" : ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} isPlaying={isPlaying} />
      <Player 
        songInfo={songInfo} 
        setSongInfo={setSongInfo} 
        audioRef={audioRef} 
        currentSong={currentSong} 
        setCurrentSong={setCurrentSong}
        songs={songs} 
        setSongs={setSongs}
        isPlaying={isPlaying} 
        setIsPlaying={setIsPlaying}
        isChanged={isChanged}
        setIsChanged={setIsChanged}
      />
      <Library 
        libraryStatus={libraryStatus} 
        songs={songs} 
        setSongs={setSongs} 
        setCurrentSong={setCurrentSong} 
        isPlaying={isPlaying} 
        audioRef={audioRef}
      />
      <audio onLoadedMetadata={timeUpdateHandler} onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio} onEnded={songEndHandler}></audio>
    </div>
  );
};

export default App;
