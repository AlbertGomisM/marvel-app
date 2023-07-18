import fetchCharacters from "../../../api/fetchCharacters"
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "../card/Card";
import { useState, useEffect } from "react";

export const Body = () => {
  const [characters, setCharacters] = useState();
  const [page, setPage] = useState(0)

  const handlePages = (e) =>{
    setPage(e.target.value)
  }

  useEffect(() => {
    const fetchData = async (page) => {
      try {
        const data = await fetchCharacters(page);
        setCharacters(data);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchData(page);
  }, [page]);
  console.log(page);
  return (
    <div className="justify-items-center">
      {characters !== undefined &&
      characters.data.results.map((character) => (
        <Card character={character} />
      ))}
      <div className="gap-2 row w-25">
        <button type="button" className={page==0? "btn btn-primary col": "btn btn-secondary col"} value={0} onClick={e => handlePages(e, "value")}>1</button>
        <button type="button" className={page==10? "btn btn-primary col": "btn btn-secondary col"} value={10} onClick={e => handlePages(e, "value")}>2</button>
        <button type="button" className={page==20? "btn btn-primary col": "btn btn-secondary col"} value={20} onClick={e => handlePages(e, "value")}>3</button>
        <button type="button" className={page==30? "btn btn-primary col": "btn btn-secondary col"} value={30} onClick={e => handlePages(e, "value")}>4</button>
        <button type="button" className={page==40? "btn btn-primary col": "btn btn-secondary col"} value={40} onClick={e => handlePages(e, "value")}>5</button>
      </div>
    </div>
  )
}
