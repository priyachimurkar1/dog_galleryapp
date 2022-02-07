import {useEffect,useState} from 'react';
import './SubBreed.css';

function SubBreed({subName,clickedDog}) {
    // console.log(subName);
    const[subBreedImg,setSubBreedImg]=useState([])
   
    useEffect(() => {
        fetch(`https://dog.ceo/api/breed/${clickedDog}/${subName}/images/random`)
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                setSubBreedImg(data.message);
            })
    }, [clickedDog,subName])
  return (
  
      <div className="sub-breed-card">
          <img src={subBreedImg} alt="dog" />
           <h4>{subName}</h4>
        </div>

  
  )
}
export default SubBreed;