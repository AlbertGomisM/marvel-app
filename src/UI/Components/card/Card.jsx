
export const Card = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="row w-25 mb-5 align-self-center" >
        <img className="col" src="https://estaticos-cdn.sport.es/clip/dd0e8f75-1e8c-4ea6-8a36-510a844c3b43_media-libre-aspect-ratio_default_0.jpg" alt="" width="100px" />
        <div className="col">
          <p>Tadej</p>
          <button type="button" class="btn btn-primary">Details</button>
        </div>
      </div>
    </div>
  )
}
