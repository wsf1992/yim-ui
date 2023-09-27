<template>
  <button
    class="ym-button"
    @click="handleClick"
    :disabled="disabled || loading"
    :autofocus="autofocus"
    type="button"
    :class="[{
        'is-disabled': disabled,
        'is-loading': loading,
      }]"
  >
    <i class="el-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script>
export default {
  name: "YmButton",
  props: {
    icon: {
      type: String,
      default: "",
    },
    loading: Boolean,
    disabled: Boolean,
    autofocus: Boolean
  },
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    },
  },
};
</script>

<style scoped>
  .ym-button {
    color: red;
  }
</style>