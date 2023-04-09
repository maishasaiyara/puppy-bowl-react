import React, { useState, useEffect } from 'react';
import '../style.css';
import PlayerForm from './PlayerForm';
import Players from './Players';

const cohortName = '2303-FTB-ET-WEB-FT';
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

const Main = () => { 
    console.log     
    
    const [puppy, setPuppy] = useState([]);
    const [singlePuppy, setSinglePuppy] = useState({});

// have some state here - players
// useEffect to get initial players  


 useEffect(() => {
    const displayPuppy = async () => {
        const getPuppyResponse = await fetchAllPlayers();
        setPuppy(getPuppyResponse)
       } 
       displayPuppy()

     },[]) 
    const fetchAllPlayers = async () => {
    try {
        const response = await fetch(`${APIURL}players`);
        const result = await response.json(); 
        setPuppy(result.data.players) 
            
    }   catch (error) {
        console.log(error);
    }
}
fetchAllPlayers();    

 const fetchSinglePlayer = async (puppyId) => {
    try {
        const response = await fetch(`${APIURL}players/${puppyId}`);
        const result = await response.json();
        setSinglePuppy(result.data.player)
       } catch(error){ 
        console.log(error);
       }
    return ( 
        <div id="all-players-container">
            {/* <PlayerForm /> */}
            <Players />
         </div>    
             );
            };
        
            
         
         
// console.log(singlePuppy);

        
    

// map through single puppies
// add button with go back /onclick
// set onclick single puppy to empty object
// turn into ternary func


//  return (
//     <div class="single-player-card">
//     <div class="header-info">
//       <p class="pup-title">${pup.name}</p>
//       <p class="pup-number">#${pup.id}</p>
//     </div>
//     <img src="${pup.imageUrl}" alt="photo of ${pup.name} the puppy"/>
//     <button class="detail-button" data-id={pup.id}>See details</button>
//  </div>) 

        }
export default Main