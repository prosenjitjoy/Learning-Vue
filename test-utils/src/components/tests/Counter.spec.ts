import { mount } from "@vue/test-utils"
import { describe, test, assert } from "vitest"
import Counter from "../Counter.vue"

describe('counter', function () {
  test('emits an event when clicked', function () {
    const wrapper = mount(Counter)

    wrapper.find('button').trigger('click')

    assert.property(wrapper.emitted(), 'increment')
  })

  test('emit an event with count when clicked', function () {
    const wrapper = mount(Counter)

    wrapper.find('button').trigger('click')
    wrapper.find('button').trigger('click')
    const incrementEvent = wrapper.emitted('increment') as number[]

    assert.lengthOf(incrementEvent, 2)
    assert.equal(incrementEvent[0], 1)
    assert.equal(incrementEvent[1], 2)
  })
})