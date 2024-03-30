import { faAngleRight, faAngleLeft, faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Player({songInfo, setSongInfo, currentSong, setCurrentSong, audioRef, songs, setSongs, isPlaying, setIsPlaying, isChanged, setIsChanged}) {
    const getTime = (time) => {
        return(
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        );
    };

    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({...songInfo, currentTime: e.target.value});
    };

    const trackAnim = () => {
        if (!isNaN(songInfo.animationPercentage)) {
            return {
                transform: `translateX(${songInfo.animationPercentage}%)`
            };
        }
        else {
            return {
                transform: `translate(0%)`
            };
        };
    };

    const activeLibraryHandler = (nextPrev) => {
        const newSongs = songs.map((song) => {
            if(song.id === nextPrev.id) {
                return {
                    ...song,
                    active: true,
                };
            }
            else {
                return {
                    ...song,
                    active: false,
                };
            };
        });
        setSongs(newSongs);
    };

    const skipTrackHandler = async (direction) => {
        setIsChanged(isChanged);
        if(!isNaN(songInfo.duration) || !isNaN(songInfo.animationPercentage)){
            let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    
            if(direction === 'skip-forward'){
                await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
                activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
            }
            if(direction === 'skip-back'){
                if((currentIndex - 1) % songs.length === -1){
                    await setCurrentSong(songs[songs.length - 1]);
                    activeLibraryHandler(songs[songs.length - 1]);
                    if(isPlaying) audioRef.current.play();
                    return;
                }
                await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
                activeLibraryHandler(songs[(currentIndex - 1) % songs.length]);
            }
            if(isPlaying) audioRef.current.play();
        }
    };

    const playSongHandler = () => {
        if(isPlaying) {
            setIsPlaying(!isPlaying);
            audioRef.current.pause();
        }
        else {
            setIsPlaying(!isPlaying);
            audioRef.current.play();
        }
    };

    return(
        <div className="player-container">
            <div className="time-controller">
                <p>{getTime(songInfo.currentTime)}</p>
                <div style={{background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`}} className="track">
                    <input min={0} max={songInfo.duration || 0} value={songInfo.currentTime} onChange={dragHandler} type="range" />
                    <div style={trackAnim()} className="animate-track"></div>
                </div>
                <p>{getTime(songInfo.duration) || 0}</p>
            </div>
            <div className="play-controller">
                <FontAwesomeIcon onClick={() => skipTrackHandler('skip-back')} className="skip-back" size="2x" icon={ faAngleLeft } />
                <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={isPlaying ? faPause : faPlay } />
                <FontAwesomeIcon onClick={() => skipTrackHandler('skip-forward')} className="skip-forward" size="2x" icon={ faAngleRight } />
            </div>
        </div>
    );
};

export default Player;