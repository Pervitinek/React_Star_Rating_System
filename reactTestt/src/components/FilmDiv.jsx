import {Right} from "./Right.jsx";
import {Left} from "./Left.jsx";

export function FilmDiv({src, alt, filmname, creatorname}){
    return(
        <div className={"filmDiv"}>
            <Left src={src} alt={alt} filmName={filmname} creatorName={creatorname}/>
            <Right/>
        </div>
    )
}
