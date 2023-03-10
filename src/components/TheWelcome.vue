<script setup lang="ts">
import AppInput from './UI/AppInput.vue'
import AppButton from './UI/AppButton.vue'
import AppIcon from './UI/AppIcon.vue'
</script>

<template>
  <AppButton :type="'button'" :size="'md'" color="yellow" icon-position="after">Button Test</AppButton>

  <AppInput type="email" size="sm" placeholder="Write an email" :icon-position="'after'" :icon="'user'" />
  <AppInput type="email" size="sm" placeholder="Write an email" :icon="'user'" />
  <AppInput type="email" size="sm" placeholder="Write an email" :icon="'user'" disabled />
  <AppInput type="email" size="sm" placeholder="Write an email" :icon="'user'" readonly />
  <hr />
  <hr />
  <AppIcon :icon="'user'" :size="'sm'" :rounded="true" />
  <AppIcon :icon="'user'" :size="'md'" />
  <AppIcon :icon="'user'" :size="'lg'" :bg-color="'pink'" rounded />
</template>
