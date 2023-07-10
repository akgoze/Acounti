<script setup lang="ts">
import { computed } from 'vue'
export interface Props {
  title: string
  description: string
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  description: ''
})

</script>
<template>
  <div class="app-list flex-1">
    <slot name="prepend"></slot>
    <div class="app-list__content">
      <h3 class="app-list__title" v-html="title" v-if="title" />
      <p class="app-list__text"  v-html="description" v-if="description"/>
    </div>

    <slot name="append"></slot>
  </div>
</template>