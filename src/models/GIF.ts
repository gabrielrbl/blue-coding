type Images = {
  height: string;
  width: string;
  size: string;
  url: string
}

type ImageTypes = 'original'

export type GIF = {
  id: string
  title: string
  images: {
    [key in ImageTypes]: Images
  }
}