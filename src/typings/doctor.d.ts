interface Doctor {
  name: string
  company: string
  email: string
  phone: string
  address: string
  about: string
  registered: string
  latitude: number
  longitude: number
  rating: number
  distance?: number
  [rest: string]: string | number | undefined
}
