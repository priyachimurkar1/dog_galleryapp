import './Card.css';
import { useEffect, useState } from 'react';

function Card({ name,handleClickedPopup,selectedDog}) {
    const [img, setImg] = useState([]);
    useEffect(() => {
        fetch(`https://dog.ceo/api/breed/${name}/images/random`)
            .then(response => response.json())
            .then(data => {
                // console.log(data.message);
                setImg(data.message);
            })
        }, [name])
    
    return (
        <div className='card-cont'>
        <div className="card" onClick={()=>handleClickedPopup(selectedDog)}>
          <img src={img} alt="dog" />
           <h4>{name}</h4>
        </div>
        </div>
    )
}
export default Card;