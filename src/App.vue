<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <app-button :btnType="'button'" :btnStyle="'solid'" :btnColor="'yellow'" :btnSize="'sm'">Button Small</app-button>
  <app-button :btnType="'button'" :btnStyle="'solid'" :btnColor="'yellow'" :btnSize="'md'">Button Medium</app-button>
  <app-button :btnType="'button'" :btnStyle="'solid'" :btnColor="'yellow'" :btnSize="'lg'">Button Large</app-button>
  <hr>
  <hr>
  <app-input ref="'inputTest'" type="email" placeholder="New Input" id="dede" :iconType="'icon-right'" :iconName="'icon-profile'"></app-input>
</template>

<script>
import AppButton from './components/UI/AppButton.vue';
import AppInput from './components/UI/AppInput.vue';
export default {
  name: 'App',
  components: {
    AppButton,
    AppInput
  },
  methods: {
    focusOnInput() {
      console.log('focus');
    }
  }
}
</script>

<style lang="scss">
  @import './assets/stylesheets/global.scss';
</style>
