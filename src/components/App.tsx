import './App.css'
import { useEffect, useState } from 'react'
import ErrorMessage from './ErrorMessage/ErrorMessage'
import ImageGallery from './ImageGallery/ImageGallery'
import ImageModal from './ImageModal/ImageModal'
import Loader from './Loader/Loader'
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn'
import SearchBar from './SearchBar/SearchBar'
import fetchImages from '../api/unsplash'
import Images from '../types'

interface IsModalType {
  isShow: boolean
  url: string
  alt: string
}

export default function App() {
  const isModalState: IsModalType = {
    isShow: false,
    url: '',
    alt: '',
  }

  const [images, setImages] = useState<Images[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [page, setPage] = useState<number>(1)
  const [query, setQuery] = useState<string>('')
  const [modalData, setModalData] = useState(isModalState)
  const [totalPages, setTotalPages] = useState<number>(0)

  useEffect(() => {
    if (!query) {
      return
    }

    async function getData() {
      try {
        setIsLoading(true)
        setError(false)
        const { results, totalPages } = await fetchImages(query, page)
        setImages((prevImages: Images[]) => {
          return [...prevImages, ...results]
        })
        setTotalPages(totalPages)
      } catch (error: unknown) {
        setError(true)
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }

    getData()
  }, [query, page])

  const handleSearch = (newQuery: string): void => {
    setQuery(newQuery)
    setPage(1)
    setImages([])
  }

  const handleLoadMore = (): void => {
    setPage((prevPage: number) => prevPage + 1)
  }

  const openModal = (url: string, alt: string): void => {
    setModalData({
      isShow: true,
      url,
      alt,
    })
  }

  const closeModal = (): void => {
    setModalData(isModalState)
  }

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage>Please, reload the page</ErrorMessage>}
      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {images.length > 0 && !isLoading && page < totalPages && (
        <LoadMoreBtn onClick={handleLoadMore}>Lode more</LoadMoreBtn>
      )}
      {isLoading && <Loader isLoading={isLoading} />}
      <ImageModal
        onCloseModal={closeModal}
        isOpen={modalData.isShow}
        modalUrl={modalData.url}
        modalAlt={modalData.alt}
      />
    </div>
  )
}
