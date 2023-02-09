<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    icon: {
      type: String,
      required: true,
    },

    size: {
      type: String,
      default: 'md',
      validator: (val: string) => ['sm', 'md', 'lg'].includes(val),
    },

    color: {
      type: String,
      default: 'black',
    },
  },

  computed: {
    iconAttributes(): Record<string, any> {
      return {
        class: {
          icon: true,
          [`icon-${this.icon}`]: true,
          [`icon--${this.size}`]: !!this.size,
          [`icon--${this.color}`]: !!this.color,
        },
      }
    },
  },
})
</script>

<template>
  <div v-bind="iconAttributes"></div>
</template>
