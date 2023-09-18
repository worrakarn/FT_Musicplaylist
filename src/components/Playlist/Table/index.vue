<template>
  <div class="mt-4">
    <div>
      <div class="input-group">
        <span class="input-group-text btn-search"
          ><i class="fa fa-search" aria-hidden="true"></i
        ></span>
        <input
          type="text"
          placeholder="Search here..."
          aria-label="Search"
          v-model="search"
          ref="searchBox"
          class="form-control"
        />
      </div>
    </div>
    <div class="card shadow mt-4 bg-dark-base">
      <div class="table-responsive px-3 pt-2">
        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">TITLE</th>
              <th scope="col">ALBUM</th>
              <th scope="col"><i class="fa fa-calendar-minus-o" aria-hidden="true"></i></th>
              <th scope="col"><i class="fa fa-clock-o" aria-hidden="true"></i></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="playlist in playlists" :key="playlist.id">
              <th class="text-center">
                <i
                  v-if="playlist.is_my_playlist"
                  class="fa fa-check cursor"
                  aria-hidden="true"
                  @click="deleteFormPlaylist(playlist)"
                ></i>
                <i
                  v-else
                  class="fa fa-plus cursor"
                  aria-hidden="true"
                  @click="add2Playlist(playlist)"
                ></i>
              </th>
              <th class="text-nowarp">{{ playlist.title }}</th>
              <th class="text-nowarp">{{ playlist.album }}</th>
              <th>{{ moment(playlist.createdAt).format('DD/MM/YYYY') }}</th>
              <th>{{ moment(playlist.createdAt).format('HH:mm') }}</th>
            </tr>
          </tbody>
        </table>
        <div class="d-flex flex-row-reverse">
          <div v-if="total > 0" class="pagination">
            <vue-awesome-paginate
              :total-items="total"
              v-model="currentPage"
              :items-per-page="limit"
              :showBreakpointButtons="false"
              :on-click="onClickPage"
            >
              <template #prev-button>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
                  </svg>
                </span>
              </template>

              <template #next-button>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" />
                  </svg>
                </span>
              </template>
            </vue-awesome-paginate>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { usePlaylistStore } from '@/stores/playlist'
import { defineComponent, ref, onMounted, computed, watch } from 'vue'
import moment from 'moment'
import type IPlaylist from '@/interfaces/playlist'
import { playlistAdd, playlistDelete } from '@/services/api'
import { useRoute } from 'vue-router'
import { isBoolean } from 'lodash'
import debounce from 'lodash.debounce'

export default defineComponent({
  name: 'MusicList',
  setup() {
    const route = useRoute()
    const search = ref<string>()
    const owner = ref<boolean>(false)
    const currentPage = ref<number>(1)
    const limit = ref<number>(10)

    const playlistStore = usePlaylistStore()

    const playlists = computed(() => {
      return playlistStore.getPlaylists
    })

    const total = computed(() => {
      return playlistStore.getTotal
    })

    const fetchData = () => {
      playlistStore.fetchPlaylists({
        title: search.value,
        owner: owner.value,
        page: currentPage.value - 1,
        limit: limit.value
      })
    }

    watch(
      search,
      debounce(() => {
        fetchData()
      }, 500)
    )

    onMounted(() => {
      if (isBoolean(route.meta.owner)) {
        owner.value = route.meta.owner
      }
      fetchData()
    })

    const onClickPage = (page: number) => {
      currentPage.value = page
      fetchData()
    }

    const add2Playlist = (playlist: IPlaylist) => {
      playlistAdd(Number(playlist.id)).then((e: IPlaylist[] | boolean) => {
        if (e) {
          playlist.is_my_playlist = !playlist.is_my_playlist
          playlistStore.updatePlaylist(playlist)
        }
      })
    }

    const deleteFormPlaylist = (playlist: IPlaylist) => {
      playlistDelete(Number(playlist.id)).then((e: IPlaylist[] | boolean) => {
        if (e) {
          playlist.is_my_playlist = !playlist.is_my_playlist
          playlistStore.updatePlaylist(playlist)
        }
      })
    }

    return {
      search,
      currentPage,
      total,
      limit,
      onClickPage,
      playlists,
      moment,
      add2Playlist,
      deleteFormPlaylist
    }
  }
})
</script>
