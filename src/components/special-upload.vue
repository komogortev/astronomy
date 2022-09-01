<script setup lang="ts">
import { ref, inject } from 'vue'

const props = defineProps<{
  customImg?: string;
}>()

const img = inject("specialUploadImage") as string;
const imgVal = img ?? props.customImg;
const imgSrc = ref(imgVal)

function fileProcess(file: File) {
  imgSrc.value = URL.createObjectURL(file)
}

function fileUpload(event: Event): void {
  const target = event.target as HTMLInputElement
  if (target.files !== null) {
    const file = target.files[0]
    fileProcess(file)
  }
}

</script>
<template>
  <div class="image-uploader flex bg-orange flex-col">
    <h1 class="uppercase underline p-2">File uploaded</h1>

    <input @change="fileUpload" type="file" title="fileUpload" id="file-upload" accept="image/*">

    <div class="your-file m-2 border-2 border-solid border-orange-800 p-2">
      <img id="image-preview" :src="imgSrc" alt="image-preview">
    </div>
  </div>
</template>
