import { mount } from '@vue/test-utils'
import { describe, test, assert } from 'vitest'
import Todo from '../Todo.vue'

describe('todo', function () {
  const wrapper = mount(Todo)

  test('renders a todo', function () {
    const data = wrapper.get('[data-test=todo]')
    assert.equal(data.text(), 'Learn Vue.js 3')
  })

  test('creates a todo', async function () {
    assert.lengthOf(wrapper.findAll('[data-test=todo]'), 1)

    await wrapper.find('[data-test=new-todo]').setValue('New todo')
    await wrapper.get('[data-test=form]').trigger('submit')

    assert.lengthOf(wrapper.findAll('[data-test=todo]'), 2)
  })

  test('completes a todo', async function () {
    await wrapper.get('[data-test=todo-checkbox]').setValue(true)
    assert.include(wrapper.get('[data-test=todo]').classes(), 'completed')
  })
})
