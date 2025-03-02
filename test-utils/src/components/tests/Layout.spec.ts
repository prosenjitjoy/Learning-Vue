import { mount } from "@vue/test-utils"
import { describe, test, assert } from 'vitest'
import Layout from "../Layout.vue"

describe('layout', function () {
  test('layout default slot', function () {
    const wrapper = mount(Layout, {
      slots: {
        header: '<div>Header</div>',
        main: '<div>Main Content</div>',
        footer: '<div>Footer</div>'
      }
    })

    assert.include(wrapper.find('header').text(), 'Header')
    assert.include(wrapper.find('main').text(), 'Main Content')
    assert.include(wrapper.find('footer').text(), 'Footer')
  })
})