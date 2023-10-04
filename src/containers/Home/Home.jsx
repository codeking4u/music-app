import React, { useState, useEffect } from "react";
import Header from "../../components/Common/Header/Header";
import Footer from "../../components/Common/Footer/Footer";
import HomeFilter from "./HomeFilter";
import SongList from "../../components/SongList/SongList";
import SearchBar from "../../components/Common/SearchBar/SearchBar";

function Home() {
  const [songs, setSongs] = useState([]); // State to store the list of songs
  const [filteredSongs, setFilteredSongs] = useState([]); // State to store filtered songs
  const [searchTerm, setSearchTerm] = useState(""); // State to store the search term
  const [selectedLevels, setSelectedLevels] = useState([]); // State to store selected levels

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3004/songs");
        const data = await response.json();
        setSongs(data);
      } catch (error) {
        console.error("Error fetching songs:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = songs.filter((song) => {
      const matchesSearchTerm = song.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesLevels =
        selectedLevels.length === 0 || selectedLevels.includes(song.level);
      return matchesSearchTerm && matchesLevels;
    });
    setFilteredSongs(filtered);
  }, [songs, searchTerm, selectedLevels]);

  const handleSearch = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };

  const handleLevelFilterChange = (selected) => {
    setSelectedLevels(selected);
  };

  return (
    <div>
      <Header>
        <SearchBar onSearch={handleSearch} />
      </Header>
      <main>
        <div className="home-content">
          <aside className="filter-section">
            <HomeFilter onLevelFilterChange={handleLevelFilterChange} />
          </aside>
          <section className="song-list-section">
            <SongList songs={filteredSongs} />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
