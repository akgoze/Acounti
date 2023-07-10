<script setup lang="ts">
import { computed } from 'vue'

export interface Props {
  type?: 'submit' | 'button' | 'reset'
  disabled?: boolean
  size?: 'sm' | 'md' | 'lg'
  style?: 'solid' | 'outline'
  color?: string
  icon?: string
  iconPosition?: 'after' | 'before'
}

const props = withDefaults(defineProps<Props>(), {
  type: 'button',
  disabled: false,
  size: 'md',
  style: 'solid',
  color: 'yellow',
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