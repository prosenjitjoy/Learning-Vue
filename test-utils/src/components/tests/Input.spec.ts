import { mount } from "@vue/test-utils"
import { describe, test, assert } from "vitest"
import Input from "../Input.vue"

describe('input', function () {
  test('sets the value', async function () {
    const wrapper = mount(Input)
    const input = wrapper.find('input')

    await input.setValue('my@mail.com')

    assert.equal(input.element.value, 'my@mail.com')
  })

  test('emit submit event when clicked', async function () {
    const wrapper = mount(Input)

    await wrapper.find('button').trigger('click')

    assert.property(wrapper.emitted(), 'submit')
  })

  test('emits the input to its parent', async function () {
    const wrapper = mount(Input)

    await wrapper.find('input').setValue('my@mail.com')
    await wrapper.find('button').trigger('click')
    const submitEvent = wrapper.emitted('submit') as string[][]

    assert.equal(submitEvent[0][0], 'my@mail.com')
  })
})