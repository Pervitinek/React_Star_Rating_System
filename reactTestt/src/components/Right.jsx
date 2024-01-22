import {StarBtn} from "./StarBtn.jsx";
import {useState} from "react";
export function Right(){
    let stars = [];
    const [rating, setRating] = useState(-1);

    for(let i = 0; i < 5; i++){
        stars.push(<StarBtn key={i} isTrue={i <= rating} onClick={() => {
            if(i === 0 && rating > 0){
                setRating(i);
            }else{
                if(i === rating){
                    setRating(-1);
                }else{
                    setRating(i);
            }
        }}}/>);
    }

    return(
        <div className={"stars"}>
            {stars}
        </div>
    )
}