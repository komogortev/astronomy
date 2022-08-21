<script setup lang="ts">
import { ref, inject } from 'vue'

const props = defineProps<{
  customImg?: string
}>()

const imgSrc = ref(props.customImg)

function fileProcess(file:File) {
  imgSrc.value = URL.createObjectURL(file)
}

function fileUpload(event: Event): void {
  const target = event.target as HTMLInputElement
  const file = target.files[0]
  fileProcess(file)
}

</script>
<template>
  <div class="image-uploader flex bg-orange flex-col">
    <h1 class="uppercase underline p-2">File uploaded</h1>

    <input @change="fileUpload" type="file" name="fileUpload" id="file-upload" accept="image/*">

    <div class="your-file m-2 border-2 border-solid border-orange-800 p-2">
      <img :src="imgSrc" alt="">
    </div>
  </div>
</template>
