import './SearchBar.css';

function SearchBar({handleChange}){
    
    return(
        <div className='searchbar'>
    <input  type='text' placeholder=" Type Here To Filter By Breed" onChange={(e)=>handleChange(e.target.value)}/>
    </div>
     )
}
export default SearchBar;