import { api, GIPHY_API_KEY } from '.';

const endpoint = '/gifs/search';

type ISearchProps = {
  q: string
}

type ISearchResponse = {
  data: any[]
  meta: {
    status: number
    msg: string
    response_id: string
  }
  pagination: {
    total_count: number
    count: number
    offset: number
  }
}

export const fetchSearch = async ({ q }: ISearchProps): Promise<ISearchResponse> => { 
  const { data } = await api.get(`${endpoint}?api_key=${GIPHY_API_KEY}&q=${q}`)
  return data
}
