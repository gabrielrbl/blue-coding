// * Components
import { Carousel } from '../components/Carousel';

// * Models
import { GIF } from '../models';

type IContentProps = {
  gifs: GIF[];
  loading: boolean;
  setSelectedGif: (gif: GIF | null) => void;
};

export const Content = ({ gifs, loading, setSelectedGif }: IContentProps) => {
  return (
    <Carousel
      gifs={gifs}
      loading={loading}
      setSelectedGif={setSelectedGif}
    />
  );
}