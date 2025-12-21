import { defineNuxtPlugin } from '#app'
import Toast, { POSITION, TYPE } from 'vue-toastification'
import 'vue-toastification/dist/index.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Toast, {
    position: POSITION.TOP_RIGHT,
    timeout: 4000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: false,
    closeButton: "button",
    icon: true,
    rtl: false,
    transition: "Vue-Toastification__bounce",
    maxToasts: 20,
    newestOnTop: true,
    toastDefaults: {
      [TYPE.SUCCESS]: {
        timeout: 4000,
        hideProgressBar: false,
      },
      [TYPE.ERROR]: {
        timeout: 5000,
        hideProgressBar: false,
      },
      [TYPE.WARNING]: {
        timeout: 4000,
        hideProgressBar: false,
      },
      [TYPE.INFO]: {
        timeout: 4000,
        hideProgressBar: false,
      }
    }
  })
})