
export const Card = (props) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="row w-25 mb-5 align-self-center" >
        <img className="col mb-3" src={props.character.thumbnail.path + "." + props.character.thumbnail.extension} alt="" width="100px" />
        <div className="col">
          <p>{props.character.name}</p>
          <button type="button" className="btn btn-primary" onClick={() => props.click(props.character)}>Details</button>
        </div>
      </div>
    </div>
  )
}
