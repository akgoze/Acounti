<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <app-button :btnType="'button'" :btnStyle="'solid'" :btnColor="'yellow'" :btnSize="'sm'">Button Small</app-button>
  <app-button :btnType="'button'" :btnStyle="'solid'" :btnColor="'yellow'" :btnSize="'md'">Button Medium</app-button>
  <app-button :btnType="'button'" :btnStyle="'solid'" :btnColor="'yellow'" :btnSize="'lg'">Button Large</app-button>
  <hr>
  <hr>
  
</template>

<script>
import AppButton from './components/UI/AppButton.vue';
export default {
  name: 'App',
  components: {
    AppButton
  }
}
</script>

<style lang="scss">

@import "./assets/stylesheets/global";
</style>
