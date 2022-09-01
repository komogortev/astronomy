import { describe, it, test, expect } from "vitest"
import { render, screen } from '@testing-library/vue'
import { mount } from "@vue/test-utils"
import WorldScene from "../world-scene.vue"
//import World from '../../core/constructors/World'

describe("WorldScene", () => {
  // setup
  const viewText = 'Hello from inside WorldScene'
  const viewId = 'testViewId'
  const elementName = 'SPAN'

  // assert
  it.skip('Renders WorldScene element correctly', async () => {
    render(WorldScene, {
      props: { element: elementName, id: viewId },
      slots: { default: viewText }
    })

    const view = await screen.findByText(viewText)

    expect(view.id).toBe(viewId)
    expect(view.innerHTML).toBe(viewText)
    expect(view.nodeName).toBe(elementName)
  })

  it.skip('Snapshot matches', () => {
    const wrapper = render(WorldScene, {
      props: {
        element: elementName
      }
    })

    expect(wrapper).toMatchSnapshot()
  })

  test('World constructor mounts?', () => {
    it('Is World constructor available?', () => {
    })

    it('', () => {
    })
  })

})