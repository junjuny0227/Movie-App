import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year"
      )
      .then((response) => {
        console.log(response);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Movie App</h1>
      {loading ? <h2>loading...</h2> : null}
    </div>
  );
}

export default App;
