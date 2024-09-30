import { FC } from 'react'
import { RotatingLines } from 'react-loader-spinner'
import css from './Loader.module.css'

interface LoaderProps {
  isLoading: boolean
}

const Loader: FC<LoaderProps> = ({ isLoading }) => {
  return (
    <div className={css.loader}>
      <RotatingLines
        visible={isLoading}
        strokeColor="#595959"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  )
}

export default Loader
