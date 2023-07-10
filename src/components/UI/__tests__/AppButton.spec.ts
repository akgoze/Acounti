import { expect, it } from 'vitest'
import { mount } from "@vue/test-utils"
import AppButton from '@/components/UI/AppButton.vue'

const wrapper = mount(AppButton)

it('should render a button', () => {
  expect(wrapper.find('button').exists()).toBe(true)
})

it('should render a button with default props', () => {
  const wrapper = mount(AppButton)
  const defaultProps = {
    type: 'button',
    disabled: false,
    size: 'md',
    color: 'yellow',
    style: 'solid',
    icon: '',
    iconPosition: 'before',
  }
  expect(wrapper.props()).toEqual(defaultProps)
  expect(wrapper.find('button').attributes('disabled')).toBeUndefined()
  expect(wrapper.html()).toMatchSnapshot()
})

it('should render a button with custom props', () => {
  const customProps = {
    type: 'submit',
    disabled: true,
    size: 'lg',
    color: 'yellow',
    style: 'outline',
    icon: 'check',
    iconPosition: 'after',
  }
  const wrapper = mount(AppButton, {
    props: customProps,
  })
  expect(wrapper.props()).toEqual(customProps)
  expect(wrapper.html()).toMatchSnapshot()
})

it('should render a button with a slot', () => {
  const wrapper = mount(AppButton, {
    slots: {
      default: 'Click me',

    },
  })
  expect(wrapper.html()).toMatchSnapshot()
})

it('should render a button with an icon', () => {
  const wrapper = mount(AppButton, {
    props: {
      icon: 'check',
      },
    })
      expect(wrapper.html()).toMatchSnapshot()
})


  
it('emits click event when button is clicked', async () => {
  const wrapper = mount(AppButton)
  await wrapper.find('button').trigger('click')
  expect(wrapper.emitted('click')).toBeTruthy()
})