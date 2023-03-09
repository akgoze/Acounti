<script setup lang="ts">
import { computed, reactive, ref } from 'vue'

export interface Props {
  type?: string
  placeholder?: string
  inputmode?: string
  icon: string | null
  iconPosition?: 'after' | 'before' | null
  disabled: boolean
  readonly: boolean
}

const onFocus = ref(false)

const props = withDefaults(defineProps<Props>(), {
  type: '',
  placeholder: '',
  inputmode: 'input',
  icon: null,
  iconPosition: null,
  disabled: false,
  readonly: false,
})

const inputAttributes = computed(function (): Record<string, any> {
  return {
    type: props.type,
    readonly: props.readonly,
    disabled: props.disabled,
    inputmode: props.inputmode,
    placeholder: props.placeholder,
    class: {
      'form-input': true,
    },
  }
})

const formGroupClasses = computed(function (): Record<string, any> {
  return {
    'form-group': true,
    'form-group--disabled': props.disabled,
    'form-group--readonly': props.readonly,
    [`icon-${props.icon}`]: !!props.icon,
    [`form-group--onfocus`]: onFocus.value,
    [`icon icon--${props.iconPosition}`]: !!props.iconPosition,
  }
})
</script>

<template>
  <div v-bind:class="formGroupClasses">
    <input v-bind="inputAttributes" @focus="onFocus = true" @blur="onFocus = false" />
  </div>
</template>
