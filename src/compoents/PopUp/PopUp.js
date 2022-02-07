import './PopUp.css';
import { useState,useEffect } from 'react';
import SubBreedList from './SubBreed/SubBreedList';
import MoreImage from './MoreImage/MoreImage';


function PopUp({handleClose,clickedDog,names}) {
    const[subBreedName,setSubBreedName]=useState([]);
    useEffect(() => {
        fetch(`https://dog.ceo/api/breed/${clickedDog}/list`)
            .then(response => response.json())
            .then(data => {
                // console.log(data.message);
               setSubBreedName(data.message);
            })
    }, [clickedDog])
    
    return (
        <>
            <div className="popup-container">
                <div className='wrapper'>
                    <div className="upper-box">
                        <h3>{clickedDog}</h3>
                        <div className="cancel-symbol" onClick={handleClose}>x</div>
                    </div>
                    <h3>Sub Breeds</h3>
                    
             {subBreedName.length===0 ?<h2>No Sub-Breeds found</h2> :<SubBreedList clickedDog={clickedDog} subBreedName={subBreedName} />}   
              <MoreImage clickedDog={clickedDog} names={names} />
                </div>
            </div>
        </>
    )
}
export default PopUp;