import { mount } from "@vue/test-utils"
import { describe, test, assert } from "vitest"
import Password from "../Password.vue"

describe('password', function () {
  test('renders an error if length is too short', async function () {
    const wrapper = mount(Password, { props: { minLenght: 10 } })

    await wrapper.find('input').setValue('short')

    assert.include(wrapper.html(), 'Password must be at least 10 characters')
  })
})