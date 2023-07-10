<script setup lang="ts">
import { useFirestore, useCollection } from 'vuefire'
import { collection } from 'firebase/firestore'


const items = ['asdasd', 'asdasd', 'asdasdasdas']

const db = useFirestore()
const todos = useCollection(collection(db, 'accounts'))

console.log('DB: ', todos)
</script>

<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
     <strong>{{ todo.name }}</strong>
     <br>
     <span>{{ todo.description }}</span>
    </li>
  </ul>
  ---
  <AppButton :type="'button'" :size="'md'" color="yellow" icon-position="after"
  :disabled="true">Button Test</AppButton>
  
  <hr>
  <hr>
  <hr>

  <app-checkbox label="Hello World" />

  <hr>
  <hr>
  <hr>
  <app-card class="sm:mt-3 md:mt-5" is-hover>
    <app-list title="Lorem ipsum dolor" description="Lorem ipsum dolor sit amet. Dolorealis curiculum.">
      <template #prepend>
        <app-icon icon="home" size="md" />
      </template>
    </app-list>
  </app-card>
  <hr>
  <hr>
  <hr>
  <app-card>
    <app-icon icon="home" size="lg"/>
  </app-card>
  <ul role="list">
    <li v-for="(item, index) of items" :key="index" class="bg-pink-500/10 font-sm-strong400">{item}</li>
  </ul>
</template>
