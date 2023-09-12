<template>
  <button
    class="el-button name"
    @click="handleClick"
    :disabled="buttonDisabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      type ? 'el-button--' + type : '',
      buttonSize ? 'el-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
      },
    ]"
  >
    <i class="el-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script>
export default {
  name: "YmButton",
  inject: {
    elForm: {
      default: "",
    },
    elFormItem: {
      default: "",
    },
  },

  props: {
    type: {
      type: String,
      default: "default",
    },
    size: String, //不传入 size时，取 undefined
    icon: {
      type: String,
      default: "",
    },
    nativeType: {
      type: String,
      default: "button",
    },
    loading: Boolean, // 不传入loading 时，取 false
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean,
  },

  computed: {
    _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },
    buttonSize() {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
    },
    buttonDisabled() {
      return this.disabled || (this.elForm || {}).disabled;
    },
  },
  _elFormItem() {
    return this.elFormItem || {};
  },
  _elForm() {
    return this.elForm || {};
  },
  _disabled() {
    return this.disabled || this._elForm.disabled;
  },
  _size() {
    return this.size || this._elFormItem.size || this._elForm.size;
  },
  methods: {
    handleClick(evt) {
      //这里抛出 click 方法
      this.$emit("click", evt);
    },
  },
};
</script>

<style scoped>
  .name {
    color: red;
  }
</style>