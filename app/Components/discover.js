import { useState } from 'react';
import Image from 'next/image';
import Song from './song';

export default function Discover({ onSongClick, playing, tracks, song_playing_data, isFetching }) {
    const [activeTab, setActiveTab] = useState('newReleases'); // 'newReleases' or 'moodsGenres'

    const styles = {
        container: {
            color: 'black',
            backgroundColor: 'white',
            borderRadius: '0.5rem',
            flex: 1,
            flexDirection: 'column',
            height: '100%',
        },
        tabButton: {
            backgroundColor: '#e0e0e0', // light grey for inactive
            hoverBackgroundColor: '#4ade80', // teal for hover
            color: 'black',
            fontWeight: 'bold',
            padding: '8px 16px',
            borderRadius: '0px', // Removed the rounded corners to simplify
        },
        activeTabButton: {
            backgroundColor: '#4ade80', // teal for active
        },
        section: {
            padding: '12px',
            backgroundColor: '#f0f0f0', // light grey for section backgrounds
            height: 'fit-content',
        },
        interactiveElement: {
            backgroundColor: '#e0e0e0', // light grey
            hoverBackgroundColor: '#4ade80', // teal for hover
            color: 'black',
            fontWeight: 'bold',
            padding: '12px',
            borderRadius: '0.5rem',
            cursor: 'pointer',
        }
    };

    return (
        <div style={styles.container}>
            <div className='flex flex-row justify-center items-center p-3' style={{ backgroundColor: '#e0e0e0' }}>
                <button 
                    style={activeTab === 'newReleases' ? {...styles.tabButton, ...styles.activeTabButton} : styles.tabButton}
                    onClick={() => setActiveTab('newReleases')}
                >
                    New Releases
                </button>
                <button 
                    style={activeTab === 'moodsGenres' ? {...styles.tabButton, ...styles.activeTabButton} : styles.tabButton}
                    onClick={() => setActiveTab('moodsGenres')}
                >
                    Moods and Genres
                </button>
            </div>
            {activeTab === 'newReleases' && (
                <div style={styles.section}>
                    <h1 className="m-2 font-bold text-xl">New Releases</h1>
                    <div className='flex flex-row gap-5 p-2 overflow-scroll'>
                        {isFetching ? (
                            <div style={{...styles.section, backdropFilter: 'blur(12px) brightness(150%)', width: '100%', height: '200px', textAlign: 'center', alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
                                <p>Loading...</p>
                            </div>
                        ) : (
                            tracks.map((song, index) => (
                                <Song key={index} data={song} name={song.title_short} singer={song.artist.name} onSongClick={onSongClick} playing={playing} picture={song.album.cover_xl} song_playing_data={song_playing_data}/>
                            ))
                        )}
                    </div>
                </div>
            )}
            {activeTab === 'moodsGenres' && (
                <div style={styles.section}>
                    <h1 className="m-2 font-bold text-xl">Moods and Genres</h1>
                    <div style={{ flexDirection: 'column', gap: '12px', padding: '12px' }}>
                        <div style={styles.interactiveElement}>Chill</div>
                        <div style={styles.interactiveElement}>Energetic</div>
                        <div style={styles.interactiveElement}>Romantic</div>
                        <div style={styles.interactiveElement}>Focus</div>
                    </div>
                </div>
            )}
            <div style={styles.section}>
                <h1 className="m-2 font-bold text-xl">Your Top Songs</h1>
                <div className='grid grid-cols-3 gap-2 p-2 overflow-auto'>
                {isFetching ? (
                    <div style={{...styles.section, backdropFilter: 'blur(12px) brightness(150%)', width: '100%', height: '200px', textAlign: 'center', alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
                        <p>Loading...</p>
                    </div>
                ) : (
                    tracks.slice(0, 9).map((song, index) => (
                        <div key={index} className="flex flex-row items-center">
                            <div className="text-lg font-bold mr-3">{index + 1}.</div>
                            <Song data={song} name={song.title_short} singer={song.artist.name} onSongClick={onSongClick} playing={playing} picture={song.album.cover_xl} song_playing_data={song_playing_data}/>
                        </div>
                    ))
                )}
                </div>
            </div>
        </div>
    );
}
