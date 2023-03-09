<script setup lang="ts">
import { computed } from 'vue'

export interface Props {
  type?: string
  disabled?: boolean
  size?: string
  style?: string
  color?: string
  icon?: string
  iconPosition?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'button',
  disabled: false,
  size: 'md',
  style: 'solid',
  color: 'default',
  icon: '',
  iconPosition: 'before',
})

const buttonAttributes = computed(function (): Record<string, any> {
  return {
    type: props.type,
    disabled: props.disabled,
    class: {
      [`btn btn-${props.size} btn-${props.style}`]: true,
      [`btn--${props.color}`]: props.color,
      [`btn--icon icon-${props.icon}`]: props.icon != '',
      [`btn--icon-${props.iconPosition}`]: true,
    },
  }
})
</script>
<template>
  <button v-bind="buttonAttributes">
    <slot></slot>
  </button>
</template>
