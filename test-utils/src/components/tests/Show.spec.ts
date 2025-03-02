import { mount } from "@vue/test-utils"
import { describe, test, assert } from "vitest"
import Show from "../Show.vue"

describe('props', function () {
  test('renders a greeting when show is true', async function () {
    const wrapper = mount(Show)
    assert.include(wrapper.html(), 'hello')

    await wrapper.setProps({ show: false })

    assert.notInclude(wrapper.html(), 'hello')
  })
})