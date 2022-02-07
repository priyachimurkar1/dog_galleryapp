import './CustomPop.css';
import React,{  useState, useCallback } from 'react';




function CustomPop({ names, handleCustomClose }) {
    const [selectedOption, setOption] = useState('');
    const [number, setNumber] = useState(0);
    const [customImg, setCustomImg] = useState([]);
    const [isRender, setRender] = useState(false);

    const handleOption = (dog) => {
        console.log(dog.target.value);
        setOption(dog.target.value)
    }
    const handleInput = (num) => {
        console.log(num.target.value);
        setNumber(num.target.value)
    }
    let option = names.map((name,i) => {
        return <option key={i}   >{name}</option>
    })
    // console.log(names)
   
    const getImg=useCallback(()=>{
       
        fetch(`https://dog.ceo/api/breed/${selectedOption}/images/random/${number}`)
        .then(response => response.json())
        .then(data => {
            console.log(data.message);
            setCustomImg(data.message);
            
        })
    
    },[selectedOption,number,setCustomImg])

    const handleSubmit = useCallback(() => {
        
        if(number && selectedOption){
            getImg();
        setRender(true)
        }
        console.log(number)
       console.log('inside click')
    },[getImg,setRender,number,selectedOption])
   
    return (
        <div className="container">
            <div className="wrapper">
                <div className="upper-box">
                    <h3>Custom Search</h3>
                    <div className="cancel-symbol" onClick={handleCustomClose}>x</div>
                </div>
                <div className="middle">
                 
                    <select className="select" onChange={handleOption}  >
                     
                   
                 <option hidden  value={selectedOption}>Select a Breed</option>   
                 {option}
                    </select>
                    <input type="number" placeholder="Number of Images" className='input-box' onChange={handleInput} value={number}  ></input>
                    <button type="submit" className='button-custom' onClick={handleSubmit} >GET IMAGES</button>
                   
                </div>
               
                <div className='img-cont'>
               
                    {isRender ?
                        <>
                       
{/* {number.length===0 && selectedOption.length===0? <h3>Enter the values!!!!</h3>:null} */}
                        
<h3>{`Showing ${number} images of ${selectedOption}`}</h3>
   
  {customImg && customImg.map((image,i) => {

            return <img src={image} key={i} alt='dog'></img>
        })}
                        </> :<h3>Enter the values!!!!</h3> }

                </div>
            </div>
        </div>

    )
}
export default CustomPop ;