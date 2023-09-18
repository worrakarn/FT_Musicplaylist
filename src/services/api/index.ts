import type { IReqPlaylist } from '@/interfaces/playlist'
import api from '@/services/axios'

export async function playlistFetch(val: IReqPlaylist) {
  return api
    .get('/api/playlist', { params: { ...val } })
    .then((response) => {
      if (response) {
        return response.data
      }
      return false
    })
    .catch((err) => {
      throw err
    })
}

export async function playlistAdd(id: number) {
  return api
    .post('/api/playlist/owner', { id })
    .then((response) => {
      if (response) {
        return response.data
      }
      return false
    })
    .catch((err) => {
      throw err
    })
}

export async function playlistDelete(id: number) {
  return api
    .delete(`/api/playlist/owner/${id}`)
    .then((response) => {
      if (response) {
        return response.data
      }
      return false
    })
    .catch((err) => {
      throw err
    })
}
