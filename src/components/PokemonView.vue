<script setup lang="ts">
import { ref, onUpdated } from 'vue'
const pokemons = ref([
  {
    "name": "bulbasaur",
    "url": "https://pokeapi.co/api/v2/pokemon/1/"
  },
  {
    "name": "ivysaur",
    "url": "https://pokeapi.co/api/v2/pokemon/2/"
  }
])

async function getPokemon() {
  const data = await fetch('https://pokeapi.co/api/v2/pokemon')
  const pokemon = await data.json()
  pokemons.value = pokemon.results
  console.log(pokemon)
}

onUpdated(() => {
  if(pokemons) {
    console.log(pokemons)
  }
})

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
