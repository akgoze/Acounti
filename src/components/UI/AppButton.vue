<template>
<button 
  :type="btnType"
  :class="`btn btn-${btnStyle} btn--${btnColor} btn-${btnSize}`"
  :disabled="btnDisabled">
    <slot></slot>
  </button>
</template>


<script>

  export default {
    name: 'AppButton',
    props: {
      btnType: {
        type: String,
        default: 'button'
      },
      btnStyle: {
        type: String,
        default: 'default'
      },
      btnColor: {
        type: String,
        default: 'default'
      },
      btnSize: {
        type: String, // lg, md, sm
        default: 'lg'
      },
      btnDisabled: {
        type: Boolean,
        default: false
      },
      btnIcon: {
        type: String, // icon-left, icon-right, icon-button
        default: ''
      }
    },
    computed: {
      // btnClass() {
      //   return `btn btn--${this.btnColor} btn--${this.btnSize}`;
      // }
    }
  }

</script>


<style lang="scss" scoped>
  @import "./../../assets/stylesheets/variables";
  .btn {
    border: none;
    background: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    font-size: 48px;
    padding-left: 16px;
    padding-right: 16px;
    &-solid {
      background: #f5f5f5;
      color: $dark;
      border-radius: 16px;
      font-weight: 800;
      border: 2px solid $dark;
    }

    /** BUTTON SIZES  */
    &-sm {
      font-size: 16px;
      line-height: 32px;
      border-radius: 10px;
      box-shadow: 0px 2px 0px $dark;
    }
    &-md {
      font-size: 18px;
      line-height: 42px;
      border-radius: 14px;
      box-shadow: 0px 3px 0px $dark;
    }
    &-lg {
      font-size: 21px;
      line-height: 54px;
      border-radius: 16px;
      box-shadow: 0px 4px 0px $dark;
    }
    /** BUTTON SIZES  */


    /** BUTTON COLORS  */
    @each $name, $color in $colors {
      &--#{$name} {
        background: $color;
        color: $dark;
        border-radius: 16px;
        &:hover {
          box-shadow: none;
          background-color: darken($color: $color, $amount: 8%);
        }
      }
    }
  }
</style>