<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { WorldConstructor as World } from '@/core/constructors/World';

defineProps<{
  element: string
  ariaLabel?: string
  isDisabled?: boolean
}>()

async function init() {
  // Get a reference to the container element
  const container_ = document.querySelector('#scene-container');
  // create a new world
  const world = new World(container_);
  // start the animation loop
  world.start();
}

onMounted(() => {
  init().catch((err) => console.error("onMounted Error", err))
});
</script>

<template>
  <component :is="element" :aria-label="ariaLabel" :disabled="isDisabled">
    <section id="scene-container"></section>
  </component>
</template>
