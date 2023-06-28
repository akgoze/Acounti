<script setup lang="ts">
import { computed } from 'vue'

export interface Props {
  id: string
  label: string
  checked: boolean
  disabled?: boolean
  onChange: (event: Event) => void  
}

const props = withDefaults(defineProps<Props>(), {
  id: '',
  label: '',
  checked: false,
  disabled: false,
  onChange: (event: Event) => {},
})

const checkboxAttributes = computed(function (): Record<string, any> {
  return {
    id: props.id,
    label: props.label,
    checked: props.checked,
    disabled: props.disabled,
    onChange: props.onChange,
  }
})

</script>

<template>
  <div class="app-checkbox">
    <input type="checkbox" v-bind="checkboxAttributes" />
    <label :for="id">{{ label }}</label>
  </div>
</template>
