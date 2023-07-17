import fetchCharacters from "../../../api/fetchCharacters"

export const Body = () => {
    fetchCharacters()
  return (
    <div>Body
        <img src="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" alt="" />
    </div>
  )
}
