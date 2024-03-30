function Song({currentSong, isPlaying}) {
    return(
        <div className="song-wrapper">
            <div className="song-bg" style={{backgroundImage: `url(${currentSong.cover})`}}></div>
            <div className="song-container">
                <div className={`song-cover-border ${isPlaying ? "start-rotate-cover" : "pause-rotate-cover"}`}>
                    <img alt={currentSong.name} src={currentSong.cover} />
                </div>
                <h2>{currentSong.name}</h2>
                <h3>{currentSong.artist}</h3>
            </div>
        </div>
    );
};

export default Song;