import { describe, it, test, expect } from "vitest"
import { render, screen, fireEvent } from '@testing-library/vue'

import PokemonView from "../PokemonView.vue"

describe("pokemonApi", () => {
  // setup
  const viewText = 'Hello from inside pokemonApi HelloWorld'
  const viewId = 'pokemonApiId'
  const elementName = 'SPAN'

  it('Renders PokemonView correctly', async () => {
    render(PokemonView, {
      props: {
        element: 'div'
      },
      slots: { default: viewText }
    })

    //start call to api, return mock data, render data, test rendered data
    const pokemon = await screen.findByText(viewText)
    await fireEvent.click(pokemon)
    const value: any = await screen.findByText(viewText)

    expect(value.innerHTML).toBe('testing')
  })
})