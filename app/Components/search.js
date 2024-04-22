import React, { useState } from "react";
import Song from "./song";

export default function Search({ onSongClick, playing, tracks, song_playing_data }) {
    const [search, setSearch] = useState("");
    const [searchHistory, setSearchHistory] = useState([]);
    const [newSongs, setNewSongs] = useState([]);

    const onButtonClick = async () => {
        const url1 = `https://corsproxy.io/?https://api.deezer.com/search?q=track:"${search}"`;
        const options1 = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'YOUR_API_KEY', // Replace with your actual API key
                'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url1, options1);
            const result = await response.json();
            setNewSongs(result.data);
            updateSearchHistory(search);
        } catch (error) {
            console.error(error);
        }
    };

    const updateSearchHistory = (newSearch) => {
        setSearchHistory(prevHistory => [newSearch, ...prevHistory.slice(0, 4)]);
    };

    return (
        <div className="flex flex-col gap-0 h-full rounded-lg text-gray-800 bg-gray-100">
            <form className="flex flex-row justify-between p-3 bg-gray-300">
                <input
                    type="text"
                    className="flex-1 mr-3 p-2 rounded-lg"
                    placeholder="Search for Songs, Albums, Artists, etc."
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button type="button" className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition duration-300 ease-in-out" onClick={onButtonClick}>
                    Search
                </button>
            </form>
            {searchHistory.length > 0 && (
                <div className="bg-gray-200 w-full p-2">
                    <h2 className="font-bold text-xl m-3">Search History</h2>
                    <ul>
                        {searchHistory.map((item, index) => (
                            <li key={index} className="m-1 text-sm">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            <div className="bg-gray-200 w-full h-full flex flex-col p-3">
                <h1 className="font-bold text-xl">Search Results</h1>
                <div className='flex flex-row gap-5 overflow-scroll max-[700px]:gap-3 max-[400px]:gap-2'>
                    {newSongs.length === 0 ? (
                        <div className="text-center w-full mt-10">
                            <p className="text-lg font-semibold">No Results Found</p>
                            <p className="text-md mt-2">Try different keywords or check your spelling.</p>
                            <div className="mt-4">
                                <img src="/search-empty-state.png" alt="No results" className="mx-auto w-1/3" />
                                <p className="text-gray-600">Can't find what you're looking for? We're here to help!</p>
                            </div>
                        </div>
                    ) : (
                        newSongs.map((song, index) => (
                            <Song key={index} data={song} name={song.title_short} singer={song.artist.name} onSongClick={onSongClick} playing={playing} picture={song.album.cover_xl} song_playing_data={song_playing_data} />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
