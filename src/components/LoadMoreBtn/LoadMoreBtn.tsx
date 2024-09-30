import css from './LoadMoreBtn.module.css'
import { FC } from 'react'

interface LoadMoreBtnProps {
  onClick: () => void
  children: React.ReactNode
}

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ onClick, children }) => {
  return (
    <button className={css.more} onClick={onClick} type="button">
      {children}
    </button>
  )
}

export default LoadMoreBtn
