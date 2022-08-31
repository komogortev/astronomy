// entry for the plugin system
import { App } from "vue";
import { SpecialUploader } from "./components";

// create "install" hook to import ("use") in main.ts
export default {
  install: (app: App, options: { img: string }= { img: ""}) => {
    app.component("SpecialUploader", SpecialUploader);
    app.provide("specialUplaoadImage", options.img)
  }
}

export { SpecialUploader }