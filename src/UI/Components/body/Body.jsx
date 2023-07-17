import fetchCharacters from "../../../api/fetchCharacters"
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "../card/Card";

export const Body = () => {
    fetchCharacters()
  return (
    <div >
      <Card />
      <Card />
    </div>
  )
}
