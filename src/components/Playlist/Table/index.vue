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
            <tr>
              <th class="text-center"><i class="fa fa-check" aria-hidden="true"></i></th>
              <th>Shut Up and Dance</th>
              <th>TALKING IS HARD</th>
              <th>2015-08-09</th>
              <th>3:19</th>
            </tr>
            <tr>
              <th class="text-center"><i class="fa fa-plus" aria-hidden="true"></i></th>
              <th>Cough Syrup</th>
              <th>Young the Giant</th>
              <th>2015-08-09</th>
              <th>4:10</th>
            </tr>
          </tbody>
        </table>
        <div class="d-flex flex-row-reverse">
          <div class="pagination">
            <vue-awesome-paginate
              :total-items="50"
              v-model="currentPage"
              :items-per-page="5"
              :max-pages-shown="5"
              :showBreakpointButtons="false"
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
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'MusicList',
  setup() {
    const search = ref<string>()
    const currentPage = ref<number>(1)

    return {
      search,
      currentPage
    }
  }
})
</script>
