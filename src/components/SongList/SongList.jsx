import React from "react";
import SongItem from "./SongItem";

function SongList({ songs }) {
  return (
    <div className="song-list">
      {songs.map((song) => (
        <SongItem
          key={song.id}
          images={song.images}
          title={song.title}
          artist={song.artist}
          level={song.level}
        />
      ))}
    </div>
  );
}

export default SongList;
