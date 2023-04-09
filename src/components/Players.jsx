import React from 'react';

const Players = ({puppy}) => {


    return ( 
        puppy.map((puppyIndex) => {
        return (
        
            <div key={puppyIndex.id} className="single-player-card">
            <div className="header-info">
            <p className="pup-title">{puppyIndex.name}</p>
            <p className="pup-number">#{puppyIndex.id}</p>
            </div>
            <img src={puppyIndex.imageUrl} alt={`photo of ${puppyIndex.name}`}/>
            <button onClick= {() => {
                fetchSinglePlayer(puppyIndex.id)}}className="detail-button" data-id={puppyIndex.id}>See details</button>
             </div> 
             
            )})
            );
};


export default Players;




// import PlayerCard from "./PlayerCard";


// const users = [
//     { name: "Koda", breed: "Husky", status: "bench" },
//     { name: "Christian", breed: "beagle", status: "bench" },
//     { name: "billy", breed: "beagle", status: "bench" },
//     { name: "chris", breed: "pug", status: "bench" },
//     { name: "abby", breed: "pug", status: "bench" },
//     { name: "joe", breed: "pug", status: "bench" },
// ];


