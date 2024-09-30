import css from './ImageCard.module.css'
import { FC } from 'react'

interface UrlsProps {
  small: string
  regular: string
}

interface ImageCardProps {
  urls: UrlsProps
  description: string
  openModal: (url: string, alt: string) => void
}

const ImageCard: FC<ImageCardProps> = ({
  urls: { small, regular },
  description,
  openModal,
}) => {
  return (
    <div className={css.card}>
      <img
        src={small}
        alt={description}
        onClick={() => openModal(regular, description)}
      />
    </div>
  )
}

export default ImageCard
