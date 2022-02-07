import SubBreed from './SubBreed';

function SubBreedList({subBreedName,clickedDog}){
    console.log(subBreedName);
    let subBreedName1=subBreedName.slice(0,4);
    return(
     
       subBreedName1.map((subName)=>{
         return <SubBreed subName={subName} clickedDog={clickedDog}/>
       })
    
    )
}
export default SubBreedList;