<template>
  <div class="col-md-8 index-0 text-white d-flex flex-column justify-content-end mt-4">
    <div>
      <div class="text-uppercase font-5">PLAYLIST</div>
      <div class="font-4x">Driving</div>
      <div>Pop jans for the car</div>
      <div class="mt-1">Created by: Ari Vaniderstine</div>
    </div>
    <div class="mt-4 d-flex justify-content-between">
      <button class="btn btn-danger" @click="onClickBtn">{{ txtBtn }}</button>
      <SongsTotal />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, computed } from 'vue'
import SongsTotal from '@/components/Info/Details/songs.vue'
import { useRouter, useRoute } from 'vue-router'
import { isBoolean } from 'lodash'
export default defineComponent({
  name: 'InfoDetails',
  components: {
    SongsTotal
  },
  setup() {
    const router = useRouter()
    const route = useRoute()
    const owner = ref<boolean>(isBoolean(route.meta.owner) ? route.meta.owner : false)
    const txtBtn = ref<string>(owner.value ? 'Playlist' : 'My own playlist')

    const onClickBtn = () => {
      if (owner.value) {
        router.push({ path: '/' })
      } else {
        router.push({ path: 'owner_playlist' })
      }
    }
    return {
      txtBtn,
      onClickBtn
    }
  }
})
</script>
