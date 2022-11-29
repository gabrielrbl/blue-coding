// * MUI
import { Card as MUICard, CardContent } from '@mui/material'

// * Models
import { GIF } from '../../models'

type ICardProps = {
  gif: GIF
}

export const Card = ({ gif }: ICardProps) => {
  return (
    <MUICard sx={{ height: '100%', display: 'flex', alignItems: 'center'}}>
      <CardContent>
        <img src={gif.images.original.url} title={gif.title} alt={gif.title} />
      </CardContent>
    </MUICard>
  )
}
