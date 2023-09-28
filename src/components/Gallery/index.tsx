import {
  GalleryButton,
  GalleryButtonHeader,
  GalleryContainer,
  GalleryHeader,
  GalleryPhotos,
  GalleryTitle,
} from './styles'

import Img1 from '../../assets/img-1.png'
import Img2 from '../../assets/img-2.png'
import Img3 from '../../assets/img-3.png'

export const Gallery = () => {
  return (
    <GalleryContainer>
      <GalleryHeader>
        <GalleryTitle>Galeria</GalleryTitle>
        <GalleryButtonHeader>Ver mais</GalleryButtonHeader>
      </GalleryHeader>
      <GalleryPhotos>
        <img alt="Imagem 1 da galeria" src={Img1} />
        <img alt="Imagem 2 da galeria" src={Img2} />
        <img alt="Imagem 3 da galeria" src={Img3} />
      </GalleryPhotos>
      <GalleryButton>Ver mais</GalleryButton>
    </GalleryContainer>
  )
}
