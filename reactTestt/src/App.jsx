import './App.css'
import {FilmDiv} from "./components/FilmDiv.jsx";
import Shrek from "./components/Shrek.jfif";

function App() {

  return (
    <>
        <FilmDiv src={Shrek} alt={"Shrek"} filmname={"Shrek v akci"} creatorname={"Franc Josef II."}/>
        <FilmDiv src={"https://deti.vls.cz/data/web/brevire/rostliny/prvosenka-jarni-petrklic.jpg"} alt={"PetrKlic"} filmname={"Petr Klíč"} creatorname={"Dežo Dorant"}/>
        <FilmDiv src={"https://motomanual.cz/wp-content/uploads/2018/04/CD1491-200-1.jpg"} alt={"KomplikovanaOprava"} filmname={"Komplikovaná oprava slovenského Lesního Kolového Traktoru LKT-81 Turbo"} creatorname={"Krum Páč"}/>
    </>
  )
}

export default App