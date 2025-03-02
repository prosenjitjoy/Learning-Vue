import { mount } from "@vue/test-utils"
import { describe, test, assert } from "vitest"
import Form from "../Form.vue"
import { type FormType } from "../../composables/types"

describe('form', function () {
  test('submits a form', async function () {
    const wrapper = mount(Form)

    const email = 'name@mail.com'
    const description = 'Lorem ipsum dolor sit amet'
    const city = 'moscow'

    await wrapper.find('input[type=email]').setValue(email)
    await wrapper.find('textarea').setValue(description)
    await wrapper.find('select').setValue(city)
    await wrapper.find('input[type=checkbox]').setValue()
    await wrapper.find('input[type=radio][value=monthly]').setValue()
    await wrapper.find('form').trigger('submit.prevent')
    const submitEvent = wrapper.emitted('submit') as FormType[][]

    assert.deepEqual(
      submitEvent[0][0],
      {
        email,
        description,
        city,
        subscribe: true,
        interval: 'monthly'
      }
    )
  })
})