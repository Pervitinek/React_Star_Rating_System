export function Left({src, alt, filmName, creatorName}){
    return(
        <div className={"leftDiv"}>
            <img src={src} alt={alt} className={"pfp"}/>
            <div>
                <p className={"filmName"}>{filmName}</p>
                <p className={"creatorName"}>{creatorName}</p>
            </div>
        </div>
    )
}