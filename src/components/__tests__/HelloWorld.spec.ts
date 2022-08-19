import { describe, it, test, expect } from "vitest"
import { render, screen } from '@testing-library/vue'
import { mount } from "@vue/test-utils"
import HelloWorld from "../HelloWorld.vue"
import World from '../../core/constructors/World'

describe("HelloWorld", () => {
  // setup
  const viewText = 'Hello from inside HelloWorld'
  const viewId = 'testViewId'
  const elementName = 'SPAN'

  // assert
  it('Renders HelloWorld element correctly', async () => {
    render(HelloWorld, {
      props: { element: elementName, id: viewId },
      slots: { default: viewText }
    })

    const view = await screen.findByText(viewText)

    expect(view.id).toBe(viewId)
    expect(view.innerHTML).toBe(viewText)
    expect(view.nodeName).toBe(elementName)
  })

  it('Snapshot matches', () => {
    const wrapper = render(HelloWorld, {
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