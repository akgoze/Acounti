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

    iconPosition: {
      type: String,
      default: "before",
      validator: (val: string) => ["before", "after"].includes(val),
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
          [`btn--icon icon-${this.icon}`]: !!this.icon,
          "btn--icon-after": this.iconPosition == "after",
        },
      };
    },
  },
};
</script>
<template>
  <button v-bind="buttonAttributes">
    <slot></slot>
  </button>
</template>
