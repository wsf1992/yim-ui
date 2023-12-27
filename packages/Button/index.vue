<template>
  <button
    class="ym-button"
    @click="handleClick"
    :disabled="disabled || loading"
    :autofocus="autofocus"
    type="button"
    :class="[
      {
        'is-disabled': disabled,
        'is-loading': loading,
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
  props: {
    icon: {
      type: String,
      default: "",
    },
    loading: Boolean,
    disabled: Boolean,
    autofocus: Boolean,
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
  height: 34px;
  background: #229dff;
  border-radius: 2px;
  font-size: 14px;
  font-family: NotoSansHans, NotoSansHans;
  font-weight: 400;
  color: #ffffff;
  outline: none;
  border-width: 0;
  box-sizing: border-box;
  padding: 0 15px;
  line-height: 34px;
}
.ym-button:hover {
  background: #66b1ff;
  border-color: #66b1ff;
  color: #fff;
}
</style>