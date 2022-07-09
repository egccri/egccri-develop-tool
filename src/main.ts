import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import App from './App.vue'

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

const app = createApp(App)
const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
          mdi,
        }
    },
})

app.use(vuetify)
app.mount('#app')
