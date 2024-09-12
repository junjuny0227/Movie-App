import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState();
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
    console.log(json);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      <h1>Detail</h1>
      {loading ? (
        <h2>loading...</h2>
      ) : (
        <div>
          <img
            src={movie.medium_cover_image}
            alt={movie.title}
            style={{ width: "25%" }}
          />
          <h2>{movie.title}</h2>
        </div>
      )}
    </div>
  );
}

export default Detail;
