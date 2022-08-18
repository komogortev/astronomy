import { describe, it, expect } from "vitest"
import { render, screen } from '@testing-library/vue'
import { mount } from "@vue/test-utils"
import HelloWorld from "../HelloWorld.vue"

describe("HelloWorld", () => {
  const viewText = 'Hello from inside HelloWorld'

  // it('Renders properly', () => {
  //   const wrapper = mount(HelloWorld, {
  //     props: {
  //       msg: "Message from Vitest"
  //     }
  //   })
  //   expect(wrapper.text()).toContain("Message from Vitest")
  // })

  it('Renders span correctly', async () => {
    // setup
    const viewId = 'testViewId'

    render(HelloWorld, {
      props: { element: "span", id: viewId },
      slots: { default: viewText }
    })

    const view = await screen.findByText(viewText)

    // assert
    expect(view.id).toBe(viewId)
  })
})