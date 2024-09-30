import css from './SearchBar.module.css'
import { FormEvent } from 'react'
import { IoIosSearch } from 'react-icons/io'
import toast, { Toaster } from 'react-hot-toast'

interface SearchBarType {
  onSearch: (query: string) => void
}

export default function SearchBar({ onSearch }: SearchBarType) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    console.log(e)
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const input = form.elements.namedItem('search') as HTMLInputElement
    const query = input.value.trim()

    const notify = () =>
      toast.error('Please enter a search query', {
        duration: 2000,
        position: 'top-right',
      })

    if (!query) {
      return notify()
    }

    onSearch(query)
    form.reset()
  }

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">
          <IoIosSearch size={32} />
        </button>
        <Toaster />
      </form>
    </header>
  )
}
