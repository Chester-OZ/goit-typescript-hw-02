export default interface Image {
  id: string
  user: { name: string }
  urls: {
    regular: string
    small: string
  }
  description: string
  likes: number
}
