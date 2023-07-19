import fetchCharacters from "../../../api/fetchCharacters"
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "../card/Card";
import { useState, useEffect } from "react";
import Modal from 'react-modal';

export const Body = () => {
  const [characters, setCharacters] = useState();
  const [page, setPage] = useState(0)

  const handlePages = (e) => {
    setPage(e.target.value)
  }

  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const openModal = (character) => {
    setSelectedCharacter(character);
  };

  const closeModal = () => {
    setSelectedCharacter(null);
  };

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
  return (
    <div className=" d-flex flex-column justify-items-center pb-5" style={{
      backgroundImage: `url("https://wallpapers.com/images/hd/giant-stars-4k-space-q03wbnsie2ul47hh.jpg")`,
      backgroundRepeat: `no-repeat`,
      backgroundSize: `cover`,
      minHeight: "200vh"
    }}>
      <div className="justify-items-center mb-5">
        <a href="https://www.marvel.com/" target="_blank">
          <img src="https://kartinkin.net/uploads/posts/2022-02/thumbs/1646058925_53-kartinkin-net-p-nadpis-marvel-kartinki-54.png" alt="" className="w-25" />
        </a>
      </div>
      <div className="d-flex justify-items-center row w-75 mx-auto">
        {characters !== undefined ?
          characters.data.results.map((character) => (
            <div className="col-md-6">
              <Card character={character} click={openModal} />
            </div>
          )) :
          <img src="https://media4.giphy.com/media/3GXSvdJfonPaybdNGM/giphy.gif?cid=ecf05e47utc0feo500w9po2hy4iqb7y8yw8m09o0adkylr6j&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="" />
        }
        {selectedCharacter && (<Modal
          isOpen={true}
          onRequestClose={closeModal}
          ariaHideApp={false}
          className="w-50"
          style={{
            overlay: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }
          }}
        >
          <div className="d-flex justify-content-end">
            <button onClick={closeModal} className="text-right">X</button>
          </div>
          <div className="d-flex flex-column align-items-center bg-light" >
            <img src={selectedCharacter.thumbnail.path + "." + selectedCharacter.thumbnail.extension} width="300wh" className="" />
            <p className="mt-3 fw-bold">{selectedCharacter.name}</p>
            <p>Numer of apperances in MARVEL stories:</p>
            <p className="fw-bold"> {selectedCharacter.stories.available}</p>
            {selectedCharacter.stories.available != 0 &&
              <div className="d-flex flex-column align-items-center">
                <p>First apperance:</p>
                <p className="fw-bold">{selectedCharacter.stories.items[0].name}</p>
                <p>Last apperance: </p>
                <p className="fw-bold">{selectedCharacter.stories.items[(selectedCharacter.stories.items.length) - 1].name}</p>
              </div>
            }
          </div>
        </Modal>)}
        <div className="d-flex justify-content-center">
          {characters !== undefined &&
            <div className="gap-2 w-25 d-flex flex-row align-items-center">
              <button type="button" className={page == 0 ? "btn btn-primary col" : "btn btn-secondary col"} value={0} onClick={e => handlePages(e, "value")}>1</button>
              <button type="button" className={page == 10 ? "btn btn-primary col" : "btn btn-secondary col"} value={10} onClick={e => handlePages(e, "value")}>2</button>
              <button type="button" className={page == 20 ? "btn btn-primary col" : "btn btn-secondary col"} value={20} onClick={e => handlePages(e, "value")}>3</button>
              <button type="button" className={page == 30 ? "btn btn-primary col" : "btn btn-secondary col"} value={30} onClick={e => handlePages(e, "value")}>4</button>
              <button type="button" className={page == 40 ? "btn btn-primary col" : "btn btn-secondary col"} value={40} onClick={e => handlePages(e, "value")}>5</button>
            </div>
          }
        </div>
      </div>
    </div>
  )
}
