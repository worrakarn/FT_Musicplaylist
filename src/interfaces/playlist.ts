export default interface IPlaylist {
  id: number
  title: string
  singer: string
  album: string
  createdAt: string
  is_my_playlist: boolean
  playlist_owner: IPlaylistOwner
}

export interface IPlaylistOwner {
  id: number
  music_id: number
}

export interface IReqPlaylist {
  title?: string
  owner?: boolean
  page: number
  limit: number
}
