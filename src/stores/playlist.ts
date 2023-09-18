import type { IReqPlaylist } from '@/interfaces/playlist'
import type IPlaylist from '@/interfaces/playlist'
import { playlistFetch } from '@/services/api'
import { findIndex } from 'lodash'
import { defineStore } from 'pinia'

export const usePlaylistStore = defineStore({
  id: 'playlist',
  state: () => ({
    playlists: [] as IPlaylist[],
    total: 0 as number
  }),
  getters: {
    getPlaylists: (state) => state.playlists,
    getTotal: (state) => state.total
  },
  actions: {
    async fetchPlaylists(param: IReqPlaylist) {
      const {
        rs_status,
        rs_data
      }: {
        rs_status: number
        rs_data: {
          results: IPlaylist[]
          total: number
        }
      } = await playlistFetch(param)
      if (rs_status) {
        this.playlists = rs_data.results
        this.total = rs_data.total
      }
    },
    updatePlaylist(val: IPlaylist) {
      const i = findIndex(this.playlists, { id: val.id })
      this.playlists.splice(i, 1, val)
    }
  }
})
