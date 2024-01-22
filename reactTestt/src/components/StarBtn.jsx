import NormalStar from "./NormalStar.png";
import FullStar from "./fullStar.png"
export function StarBtn({onClick, isTrue}){
    return(
        <button className={"starBtn"} style={{backgroundImage: "url(" + (isTrue ? FullStar : NormalStar) + ")"}} onClick={onClick}>
        </button>
    )
}