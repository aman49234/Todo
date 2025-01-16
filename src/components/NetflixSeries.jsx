import seriesData from "../api/SeriesData.json"
import { SeriesCard } from "./SeriesCard";


const NetflixSeries = (props) => {
  return (
    <ul className="grid grid-cols-3 gap-4">
      {seriesData.map((curElem) => (
        <SeriesCard key = {curElem.id} data ={curElem}/>
      
      ))}

    </ul>
  );
};


export default NetflixSeries