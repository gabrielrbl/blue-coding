import { useState } from 'react';

// * Components
import { Input, BasicCarousel, Button } from '../components'

// * Utils
import { useQuery } from 'react-query'

// * Models
import { GIF } from '../models'

// * Services
import { fetchSearch } from '../services'

export const Home = () => {
  const [search, setSearch] = useState('')
  const [gifs, setGifs] = useState<GIF[]>([])

  const searchQuery = useQuery({
    queryKey: ['search', search],
    queryFn: () => fetchSearch({ q: search }),
    enabled: search !== '',
    onSuccess: (data) => setGifs(data.data)
  })

  return (
    <div>
      <Input label='Search' value={search} name='q' onChange={(value: string) => setSearch(value)} />

      <Button  />

      <BasicCarousel gifs={gifs} loading={searchQuery.isLoading} />
    </div>
  )
}
