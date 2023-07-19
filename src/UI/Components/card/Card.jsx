
export const Card = (props) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="divcard row w-50 h-50 mb-5 align-self-center align-items-center border border-light bg-light bg-gradient rounded-3 p-2" style={{ minHeight: `40vh` }} >
        <a href={props.character.thumbnail.path + "." + props.character.thumbnail.extension} target="_blank">
          <img className="col rounded-3" src={props.character.thumbnail.path + "." + props.character.thumbnail.extension} alt="" width="100%" />
        </a>
        <div className="col">
          <p className="fw-bold" >{props.character.name}</p>
          <button type="button" className="btn btn-primary" onClick={() => props.click(props.character)}>Details</button>
        </div>
      </div>
    </div>
  )
}
