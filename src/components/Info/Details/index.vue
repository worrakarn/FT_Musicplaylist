<template>
  <div class="col-md-8 index-0 text-white d-flex flex-column justify-content-end mt-4">
    <div>
      <div class="text-uppercase font-5">PLAYLIST</div>
      <div class="font-4x">Driving</div>
      <div>Pop jans for the car</div>
      <div class="mt-1">Created by: Ari Vaniderstine</div>
    </div>
    <div class="mt-4 d-flex justify-content-between">
      <button type="button" class="btn btn-danger">My own playlist</button>
      <SongsTotal />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SongsTotal from '@/components/Info/Details/songs.vue'
export default defineComponent({
  name: 'InfoDetails',
  components: {
    SongsTotal
  }
})
</script>
