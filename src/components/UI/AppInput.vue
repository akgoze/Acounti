<template>
  <div class="form-group" :class="[iconType == 'icon-left' ? 'icon' : 'icon icon--after', iconName]">
    <input :type="type" :placeholder="placeholder" :ref="ref" class="form-input">
  </div>
</template>


<script>
  export default {
    name: 'AppInput',
    props: ['placeholder', 'type', 'ref', 'iconType', 'iconName'],
    data() {
      return {
      }
    },
  }
</script>


<style lang="scss" scoped>
  .form-input {
    border: none;
    background: none;
    transition: all 0.2s ease-in-out;
    font-size: 22px;
    line-height: 56px;
    font-style: normal;
    font-weight: 600;

    border: 2px solid #18191F;
    border-radius: 16px;
    padding-left: 16px;
    padding-right: 16px;
    &:focus {
      outline: none;
    }
    &:not([readonly]):focus {
      border-color: #18191F;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    &[readonly] {
      background: #F2F2F2;
      border-color: rgba(24, 25, 31, 0.4);
      cursor: default;
    }
  }
</style>