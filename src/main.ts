import { createApp } from 'vue'
import './style.css'
import './index.css'
import App from './App.vue'
import ViewerPlugin from './ViewerPlugin'
const randomImage = `https://picsum.photos/200/300/?random=${Math.random()}`;

const app = createApp(App)
app.use(ViewerPlugin, { img: randomImage })

app.mount("#app")