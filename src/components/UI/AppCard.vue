<script setup lang="ts">
import { computed } from 'vue'
export interface Props {
  isHover: boolean,
  title: string | null,
  description: string | null,
}

const props = withDefaults(defineProps<Props>(), {
  isHover: false,
  title: null,
  description: null,
})

</script>
<template>
  <div :class="`app-card ${isHover && 'app-card--hover'}`">
    <slot name="prepend" />
    <h3 v-html="title" v-if="title" />
    <p v-html="description" v-if="description" />
    <slot />
  </div>
</template>