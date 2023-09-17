<template>
  <header>
    <Info />
    <MusicList />
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Info from '@/components/Info/index.vue'
import MusicList from '@/components/Playlist/Table/index.vue'
export default defineComponent({
  name: 'PlayList',
  components: {
    Info,
    MusicList
  }
})
</script>
