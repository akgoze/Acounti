<script setup lang="ts">
import { computed } from 'vue'

export interface Props {
  icon: string
  size: 'sm' | 'md' | 'lg'
  color: string
  rounded?: boolean
  bgColor?: string
}

const props = withDefaults(defineProps<Props>(), {
  icon: '',
  size: 'md',
  color: 'dark',
  rounded: false,
  bgColor: '',
})

const iconAttributes = computed(function (): Record<string, any> {
  return {
    class: {
      icon: true,
      [`icon-${props.icon}`]: true,
      'icon--rounded': props.rounded,
      [`icon--${props.size}`]: !!props.size,
      [`icon--${props.color}`]: !!props.color,
      [`icon--bg-${props.bgColor}`]: !!props.bgColor,
    },
  }
})
</script>

<template>
  <div v-bind="iconAttributes"></div>
</template>
