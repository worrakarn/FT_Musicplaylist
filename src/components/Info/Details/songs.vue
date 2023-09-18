<template>
  <div class="mt-auto">{{ total }} Songs</div>
</template>

<script lang="ts">
import { usePlaylistStore } from '@/stores/playlist'
import { defineComponent, computed } from 'vue'
export default defineComponent({
  name: 'SongsTotal',
  setup() {
    const playlistStore = usePlaylistStore()

    const total = computed(() => {
      return playlistStore.getTotal
    })

    return {
      total
    }
  }
})
</script>
