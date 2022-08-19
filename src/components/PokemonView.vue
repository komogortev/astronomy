<script setup lang="ts">
import { p } from 'msw/lib/glossary-297d38ba';
import { ref } from 'vue'
const pokemons = ref([])

async function getPokemon() {
  const data = await fetch('https://pokeapi.co/api/v2/pokemon')
  const pokemon = await data.json()
  pokemon.value = pokemon.results
  console.log(pokemon)
}

</script>

<template>
  <button @click="getPokemon" class="m-5 p-y border-black border-2 border-solid border-black text-green p-6">
    Get Pokemon
  </button>

  <div v-for="(pokemon, idx) in pokemons"
    class="m-5 p-y border-black border-2 border-solid border-black text-green p-6">
    <h4 :key="idx" class="text-green">{{ JSON.stringify(pokemon) }}</h4>
  </div>
</template>
