import React from "react";

function SongList({ songs }) {
  return (
    <div className="song-list">
      {songs.map((song) => (
        <div key={song.id} className="song-item">
          <img src={song.images} alt={song.title} className="song-image" />
          <div className="song-details">
            <h3 className="song-title">{song.title}</h3>
            <p className="song-artist">{song.artist}</p>
            <p className="song-level">Level {song.level}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SongList;
