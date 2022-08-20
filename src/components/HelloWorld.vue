<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { World } from '../core/constructors/World'

defineProps<{
  element: string
  ariaLabel?: string
  isDisabled?: boolean
}>()

async function init() {
  // Get a reference to the container element
  const container_ = document.querySelector('#scene-container');
  // create a new world
  const world = new World(1, container_);
  // start the animation loop
  world.start();
}

onMounted(() => {
  init().catch((err) => console.error("onMounted Error", err))
});
</script>

<template>
  <component :is="element" :aria-label="ariaLabel" :disabled="isDisabled" class="m-5 p-y border-black">

    <slot id="scene-container"></slot>


  </component>
</template>
