<template>
  <div class="card-info p-4">
    <div class="card-info-block" style="background-color: rgb(24, 48, 72)"></div>
    <div class="card-info-block card-gradient"></div>
    <div class="row w-100 mx-auto">
      <ImgMusic />
      <InfoDetails />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ImgMusic from '@/components/Info/Img/index.vue'
import InfoDetails from '@/components/Info/Details/index.vue'
export default defineComponent({
  name: 'Info',
  components: {
    ImgMusic,
    InfoDetails
  }
})
</script>
