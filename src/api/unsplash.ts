import axios from 'axios'
import Images from '../types'

const ACCESS_KEY: string = import.meta.env.VITE_ACCESS_KEY

const apiClient = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${ACCESS_KEY}`,
    'Accept-Version': 'v1',
  },
})

interface ImagesResponse {
  results: Images[]
  totalPages: number
}

export default async function fetchImages(
  query: string,
  page: number
): Promise<ImagesResponse> {
  try {
    const response = await apiClient.get('/search/photos', {
      params: {
        query,
        page,
        per_page: 12,
        orientation: 'landscape',
      },
    })

    const { results, total_pages: totalPages } = response.data
    return { results, totalPages }
  } catch (error) {
    console.error('Error fetching images:', error)
    throw new Error('Failed to fetch images')
  }
}
