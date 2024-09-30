import Modal from 'react-modal'
import { FC } from 'react'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },

  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
}

Modal.setAppElement('#root')

interface ImageModalProps {
  isOpen: boolean
  onCloseModal: () => void
  modalUrl: string
  modalAlt: string
}

const ImageModal: FC<ImageModalProps> = ({
  isOpen,
  onCloseModal,
  modalUrl,
  modalAlt,
}) => {
  if (!modalUrl) {
    return null
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={onCloseModal} style={customStyles}>
      <img src={modalUrl} alt={modalAlt} />
    </Modal>
  )
}

export default ImageModal
