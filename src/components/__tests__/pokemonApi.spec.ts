import { describe, it, test, expect } from "vitest"
import { render, screen, fireEvent } from '@testing-library/vue'

import PokemonView from "../PokemonView.vue"

describe("pokemonApi", () => {
  // setup
  const viewBtn = 'Get Pokemon'
  const elementName = 'SPAN'

  it('Renders PokemonView correctly', async () => {
    render(PokemonView, {
      props: {
        element: elementName,
      },
    })

    //start call to api, return mock data, render data, test rendered data
    const pokemon = await screen.findByText(viewBtn)
    await fireEvent.click(pokemon)
    const value: any = await screen.findByText('bulbasaur')

    expect(value.innerHTML).toBe('bulbasaur')
  })
})