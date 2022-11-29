// * Components
import { Skeleton } from '../Skeleton';
import { Card } from '../Card';

// * Utils
import ReactMultiCarousel from 'react-multi-carousel';

// * Styles
import 'react-multi-carousel/lib/styles.css';
import './styles.css';

// * Models
import { GIF } from '../../models';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}

type ICarouselProps = {
  gifs: GIF[];
  loading: boolean;
  setSelectedGif: (gif: GIF | null) => void;
}

export const Carousel = ({ gifs, loading, setSelectedGif }: ICarouselProps) => {
  if (loading) return <Skeleton />

  return (
    <ReactMultiCarousel responsive={responsive} centerMode>
      {gifs.map((gif) => (
        <Card key={gif.id} gif={gif} setSelectedGif={setSelectedGif} />
      ))}
    </ReactMultiCarousel>
  )
}
