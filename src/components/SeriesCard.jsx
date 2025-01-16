export const SeriesCard = (props) => {
    const { id, img_url, name, rating, description, cast, genre, watch_url } = props.data;
    return(

        
            <li className="shadow-md"key ={id}>
              <div>
                <img src={img_url} alt="download(1).jpg" width="100%" height="40%" />
              </div>
              <div className="flex flex-col gap-6">
              <h2 className="font-bold text-2xl">Name :{name}</h2>
              <h3>Rating:{rating}</h3>
              <p>Summary:{description}</p>
              <p>Genre:{genre}</p>
              <p>Cast: {cast}</p>
              <a href={watch_url}>
                <button>Watch Now</button>
              </a>
              </div>

            </li>
    )
}
export default SeriesCard