import axios from 'axios'
import { useToast } from 'vue-toastification'

const instance = axios.create()
const toast = useToast()

instance.interceptors.response.use(undefined, async (error) => {
  const { response } = error
  if (response) {
    const { data, status } = response
    if (status === 400 && !data.rs_status) {
      toast.warning(data.message)
    } else if (status === 404) {
      toast.warning('404 Not Found')
    } else {
      toast.error(data.message)
    }
  }
})

export default instance
