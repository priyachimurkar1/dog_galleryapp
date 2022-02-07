import Card from "./Card";

function CardList({names,handleClickedPopup}){
    return(
       names.map((name,i)=>{

           return <Card key={i} name={name}  selectedDog={name} handleClickedPopup={handleClickedPopup}/>
       })
    )
}
export default CardList;