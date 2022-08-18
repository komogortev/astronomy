import { describe, it, expect } from "vitest"
import { mount } from "@vue/test-utils"
import HelloWorld from "../HelloWorld.vue"

describe("HelloWorld", () => {
  it('Renders properly', () => {
    const wrapper = mount(HelloWorld, {
      props: {
        msg: "Message from Vitest"
      }
    })

    expect(wrapper.text()).toContain("Message from Vitest")
  })

  // console.log(wrapper)

  // await wrapper.get("button").trigger("click")
  //
})