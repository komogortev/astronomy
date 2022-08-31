<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import PokemonView from './components/PokemonView.vue'
// import SpecialUpload from './components/special-upload.vue'
</script>

<template>
  <HelloWorld element="div" class="border-2 border-solid border-black text-green p-6 text-4xl">
    Hitchiker Simulator
  </HelloWorld>
  <PokemonView element="div" class="border-2 border-solid border-black text-green p-6 text-4xl">
  </PokemonView>

  <special-uploader></special-uploader>
</template>