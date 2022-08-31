import { createApp } from 'vue'
import './style.css'
import './index.css'
import App from './App.vue'
import ViewerPlugin from './ViewerPlugin'

const app = createApp(App)
app.use(ViewerPlugin)

app.mount("#app")