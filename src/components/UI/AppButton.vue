<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    type: {
      type: String,
      default: 'button',
      validator: (val: string) => ['button', 'submit', 'reset'].includes(val),
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    size: {
      type: String,
      default: 'md',
      validator: (val: string) => ['sm', 'md', 'lg'].includes(val),
    },

    style: {
      type: String,
      default: 'solid',
      validator: (val: string) => ['solid', 'outline'].includes(val),
    },

    color: {
      type: String,
      default: 'default',
      validator: (val: string) => ['primary', 'secondary', 'tertiary'].includes(val),
    },

    icon: {
      type: String, // icon-*
      default: null,
    },
  },
  computed: {
    buttonAttributes(): Record<string, any> {
      return {
        type: this.type,
        disabled: this.disabled,
        class: {
          btn: true,
          [`btn-${this.size}`]: !!this.size,
          [`btn-${this.style}`]: !!this.style,
          [`btn--${this.color}`]: !!this.color,
        },
      }
    },
  },
})
</script>
<template>
  <button v-bind="buttonAttributes">
    <slot></slot>
  </button>
</template>
