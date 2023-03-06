<script setup lang="ts">
import AppInput from './UI/AppInput.vue'
import AppButton from './UI/AppButton.vue'
</script>

<template>
  <app-button :type="'button'" :size="'md'" color="yellow" icon-position="after">Button Test</app-button>

  <AppInput type="email" size="sm" placeholder="Write an email" />
</template>
