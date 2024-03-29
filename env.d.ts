/// <reference types="vite/client" />
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module "vue-awesome-paginate";
declare module "vue-toastification"
declare module "lodash.debounce"
