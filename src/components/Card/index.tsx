// * MUI
import { Card as MUICard, CardContent } from "@mui/material"

// * Models
import { GIF } from "../../models"

// * Styles
import "./styles.css";

type ICardProps = {
  gif: GIF;
  setSelectedGif: (gif: GIF | null) => void;
}

export const Card = ({ gif, setSelectedGif }: ICardProps) => {
  return (
    <MUICard className="card" onClick={() => setSelectedGif(gif)}>
      <CardContent>
        <img src={gif.images.original.url} title={gif.title} alt={gif.title} />
      </CardContent>
    </MUICard>
  )
}
