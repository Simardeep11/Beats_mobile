import React, { useState } from 'react';
import Image from 'next/image';
import Song from './song';

export default function Home({onSongClick, playing, tracks, albums, song_playing_data, isFetching}) {
    const [activeTab, setActiveTab] = useState('music');

    const [artists, setArtists] = useState([{
        id: "27",
        name: "Daft Punk",
        link: "https://www.deezer.com/artist/27",
        picture_xl: "https://e-cdns-images.dzcdn.net/images/artist/f2bc007e9133c946ac3c3907ddc5d2ea/1000x1000-000000-80-0-0.jpg"
    }]);

    const style = {
        mainContainer: {
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            width: '100%',
            color: 'black',
            backgroundColor: 'white',
            borderRadius: '0.5rem',
            position: 'relative'
        },
        logoContainer: {
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem'
        },
        tabContainer: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'start',
            alignItems: 'center',
            backgroundColor: '#f8f9fa',
            padding: '1.25rem'
        },
        button: {
            fontWeight: 'bold',
            color: 'white',
            backgroundColor: '#4ade80',
            borderRadius: '9999px',
            padding: '0.5rem 2rem',
            margin: '0.5rem',
            transition: 'all 0.3s ease-in-out'
        },
        contentContainer: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            padding: '0.75rem',
            backgroundColor: '#f0f0f0',
            height: '100%',
            overflowY: 'scroll'
        },
        section: {
            padding: '1rem',
            minHeight: 'fit-content'
        },
        heading: {
            margin: '0.5rem',
            fontWeight: 'bold',
            fontSize: '1.25rem'
        },
        artistImage: {
            height: '100%',
            width: '10rem',
            borderRadius: '9999px',
            objectFit: 'cover',
            transition: 'transform 0.3s'
        }
    };

    return (
        <div style={style.mainContainer}>
            <div style={style.logoContainer}>
                <img src="Music-Mobile-main\\app\\Components\\beatslogo.png" alt="BeatsLogo" style={{ height: '2.5rem' }} />
            </div>

            <div style={style.tabContainer}>
                <button
                    style={{ ...style.button, boxShadow: activeTab === 'music' ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none' }}
                    onClick={() => setActiveTab('music')}>
                    Music
                </button>
                <button
                    style={{ ...style.button, boxShadow: activeTab === 'podcast' ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none' }}
                    onClick={() => setActiveTab('podcast')}>
                    Podcast
                </button>
            </div>

            <div style={style.contentContainer}>
                {activeTab === 'music' && (
                    <>
                        <div style={style.section}>
                            <h1 style={style.heading}>Recently Played</h1>
                            <div className='flex flex-row gap-5 overflow-scroll'>
                                {isFetching ? (
                                    <div>Loading...</div>
                                ) : (
                                    tracks.map((song, index) => (
                                        <Song key={index} data={song} onSongClick={onSongClick} playing={playing} song_playing_data={song_playing_data}/>
                                    ))
                                )}
                            </div>
                        </div>
                        <div style={style.section}>
                            <h1 style={style.heading}>Made for you</h1>
                            <div className='flex flex-row gap-5 overflow-scroll'>
                                {isFetching ? (
                                    <div>Loading...</div>
                                ) : (
                                    tracks.map((song, index) => (
                                        <Song key={index} data={song} onSongClick={onSongClick} playing={playing} song_playing_data={song_playing_data}/>
                                    ))
                                )}
                            </div>
                        </div>
                        <div style={style.section}>
                            <h1 style={style.heading}>Artists and Singles</h1>
                            <div className='flex flex-row gap-5 overflow-scroll'>
                                {artists.map((artist, index) => (
                                    <img key={index} alt={`${artist.name}'s Picture`} src={artist.picture_xl} style={style.artistImage}/>
                                ))}
                            </div>
                        </div>
                    </>
                )}
                {activeTab === 'podcast' && (
                    <div style={style.section}>
                        <h1 style={style.heading}>Top Podcasts For You</h1>
                        <p style={{ padding: '0.5rem', fontSize: '0.875rem' }}>Listen to the top trending podcasts:</p>
                        <div className='flex flex-row gap-5 overflow-scroll'>
                            <div className='w-[180px] h-[200px] rounded-2xl p-3 flex justify-center items-center'>
                                <p>No Podcasts Available</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
