import { useState } from 'react';

// * MUI
import { Box, Grid } from '@mui/material';

// * Components
import { Navbar } from './Navbar';
import { Header } from './Header';
import { Content } from './Content';
import { Modal } from '../components/Modal';

// * Utils
import { useQuery } from 'react-query';

// * Models
import { GIF } from '../models';

// * Services
import { fetchSearch } from '../services';

export const Home = () => {
  const [search, setSearch] = useState('')
  const [gifs, setGifs] = useState<GIF[]>([])
  const [selectedGif, setSelectedGif] = useState<GIF | null>(null)

  const searchQuery = useQuery({
    queryKey: ['search', search],
    queryFn: () => fetchSearch({ q: search }),
    enabled: false,
    onSuccess: (data) => setGifs(data.data)
  })

  const onSubmit = () => {
    searchQuery.refetch()
  }

  return (
    <>
      <Navbar />

      <Box sx={{ height: 'calc(100vh - 64px)' }}>
        <Grid container justifyContent="center" alignItems="center" sx={{ height: '100%' }}>
          <Grid item xs={12} md={12} lg={12} mx={12}>
            <Header
              search={search}
              setSearch={setSearch}
              onSubmit={onSubmit}
            />
          </Grid>

          <Grid item xs={12} md={12} lg={12}>
            <Content
              gifs={gifs}
              loading={searchQuery.isLoading}
              setSelectedGif={setSelectedGif}
            />
          </Grid>
        </Grid>
      </Box>

      <Modal gif={selectedGif} setSelectedGif={setSelectedGif} />
    </>
  )
}
