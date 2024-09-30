import { FC } from 'react'
import css from './ImageGallery.module.css'
import ImageCard from '../ImageCard/ImageCard'
import Images from '../../types'

interface ImageGalleryProps {
  images: Images[]
  openModal: (url: string, alt: string) => void
}

const ImageGallery: FC<ImageGalleryProps> = ({ images, openModal }) => {
  if (!images.length) {
    return <p>No images available.</p>
  }

  return (
    <ul className={css.list}>
      {images.map((image, index) => (
        <li key={`${image.id}-${index}`}>
          <ImageCard {...image} openModal={openModal} />
        </li>
      ))}
    </ul>
  )
}

export default ImageGallery
