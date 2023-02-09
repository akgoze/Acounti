<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    type: {
      type: String,
      default: null,
    },

    placeholder: {
      type: String,
      default: null,
    },

    inputmode: {
      type: String,
      default: null,
    },

    position: {
      type: String,
      default: null,
      validation: (val: string) => ['after', 'before', null].includes(val),
    },

    icon: {
      type: String,
      default: null,
      validation: (val: string) => ['after', 'before', null].includes(val),
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    readonly: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    inputAttributes(): Record<string, any> {
      return {
        type: this.type,
        readonly: this.readonly,
        disabled: this.disabled,
        inputmode: this.inputmode,
        placeholder: this.placeholder,
        class: {
          'form-input': true,
        },
      }
    },
  },
})
</script>

<template>
  <div class="form-group" :class="[position == 'icon-left' ? 'icon' : 'icon icon--after', icon]">
    <input v-bind="inputAttributes" />
  </div>
</template>
