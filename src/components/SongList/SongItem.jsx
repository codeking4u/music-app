import React from "react";
import { FaHeart } from "react-icons/fa";
import "./SongList.css";

const SongItem = ({ images, title, artist, level }) => {
  return (
    <div className="song-item">
      <div className="song-image">
        <img src={images} alt={title} />
      </div>
      <div className="song-info">
        <div className="song-details">
          <h3 className="song-title">{title}</h3>
          <p className="song-artist">{artist}</p>
        </div>
        <div className="song-additional">
          <div className="song-level">
            <span>{level}</span>
          </div>
          <FaHeart /> {/* Render the heart icon */}
        </div>
      </div>
    </div>
  );
};

export default SongItem;
