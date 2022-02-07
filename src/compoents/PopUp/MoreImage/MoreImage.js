import {useState,useEffect} from 'react';
import './MoreImage.css';

function MoreImage({clickedDog}){
    const[MoreImg,setMoreImg]=useState([])
    useEffect(() => {
        fetch(`https://dog.ceo/api/breed/${clickedDog}/images/random/4`)
            .then(response => response.json())
            .then(data => {
                // console.log(data.message);
                setMoreImg(data.message);
            })
    }, [clickedDog])
    return(
        <div className="more-image-card">
            <h4>More Images</h4>
        <img src={MoreImg[0]} alt="dog" />
        <img src={MoreImg[1]} alt="dog" />
        <img src={MoreImg[2]} alt="dog" />
        <img src={MoreImg[3]} alt="dog" />
      </div>
    )
}
export default MoreImage;