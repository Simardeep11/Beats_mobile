import React from "react";
import Image from "next/image";
import Song from "./song";

export default function User({ onSongClick, playing, song_playing_data, tracks, isFetching }) {
    return (
        <div className="flex flex-col gap-3 h-full rounded-lg text-black bg-white p-3">
            <div className="m-3 bg-gray-100 p-3 rounded-lg">
                <h1 className="flex justify-between font-bold text-xl">
                    Artists
                    <button className="text-gray-400 hover:text-gray-600">
                        &gt;
                    </button>
                </h1>
                <p className="text-sm"></p>
                <div className="flex flex-row gap-5 overflow-x-auto">
                    {/* Artists Component Goes Here */}
                </div>
            </div>
            <div className="m-3 bg-gray-100 p-3 rounded-lg">
                <h1 className="flex justify-between font-bold text-xl">
                    My Playlists
                    <button className="text-gray-400 hover:text-gray-600">
                        &gt;
                    </button>
                </h1>
                <p className="text-sm"></p>
                <div className="flex flex-row gap-5 overflow-x-auto">
                    {/* Original Playlist Component Goes Here */}
                </div>
            </div>
            <div className="m-3 bg-gray-100 p-3 rounded-lg">
                <h1 className="flex justify-between font-bold text-xl">
                    Downloads
                    <button className="text-gray-400 hover:text-gray-600">
                        &gt;
                    </button>
                </h1>
                <p className="text-sm"></p>
                <div className="flex flex-col gap-5 overflow-y-auto">
                    {/* Downloads Component Goes Here */}
                </div>
            </div>
            <div className="m-3 bg-gray-100 p-3 rounded-lg">
                <h1 className="flex justify-between font-bold text-xl">
                    Favorites
                    <button className="text-gray-400 hover:text-gray-600">
                        &gt;
                    </button>
                </h1>
                <p className="text-sm"></p>
                <div className="flex flex-col gap-5 overflow-y-auto">
                    {/* Favorites Component Goes Here */}
                </div>
            </div>
            <div className="flex flex-row justify-between p-3">
                <button className="flex flex-col bg-gray-700 w-1/2 p-3 rounded-lg text-white">
                    <h1 className="font-bold text-xl">Liked Songs</h1>
                    <p className="text-sm">Your liked songs:</p>
                    <div className="flex flex-col gap-5 overflow-y-auto">
                        {/* Liked Songs Component Goes Here */}
                    </div>
                </button>
                <div className="w-8"></div>
                <button className="flex flex-col bg-gray-700 w-1/2 p-3 rounded-lg text-white">
                    <h1 className="font-bold text-xl">Saved</h1>
                    <p className="text-sm">Your saved songs:</p>
                    <div className="flex flex-col gap-5 overflow-y-auto">
                        {/* Saved Songs Component Goes Here */}
                    </div>
                </button>
            </div>
        </div>
    );
}
