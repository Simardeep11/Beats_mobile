import React, { useState } from "react";

export default function Sidebar({ onViewSelect }) {
    const [view, setView] = useState("home");

    const handleViewSelect = (newView) => {
        console.log(newView);
        setView(newView);
        onViewSelect(newView); // This function should handle page routing or component changes in the parent component
    }

    return (
        <div className="flex h-full w-full flex-col gap-3 text-black">
            <div className="bg-white flex flex-col p-5 rounded-2xl gap-2">
                <h2 className={`p-3 duration-300 ease-out rounded-lg font-bold cursor-pointer ${view === "home" ? " bg-black text-white" : "hover:bg-gray-200"}`} onClick={() => handleViewSelect("home")}>
                    Home
                </h2>
                <h2 className={`p-3 duration-300 ease-out rounded-lg font-bold cursor-pointer ${view === "explore" ? " bg-black text-white" : "hover:bg-gray-200"}`} onClick={() => handleViewSelect("explore")}>
                    Discover
                </h2>
                <h2 className={`p-3 duration-300 ease-out rounded-lg font-bold cursor-pointer ${view === "search" ? " bg-black text-white" : "hover:bg-gray-200"}`} onClick={() => handleViewSelect("search")}>
                    Search
                </h2>
                <h2 className={`p-3 duration-300 ease-out rounded-lg font-bold cursor-pointer ${view === "user" ? " bg-black text-white" : "hover:bg-gray-200"}`} onClick={() => handleViewSelect("user")}>
                    Library
                </h2>
            </div>
            <div className="bg-white flex flex-col p-5 rounded-2xl h-full hidden">
                <h1 className="m-3 font-bold">My Library</h1>
                <p className="m-3 text-sm">This is Work in Progress....</p>
            </div>
        </div>
    );
}
