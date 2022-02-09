<template>
  <button
    class="button"
    :disabled="disabled"
    :class="[
      disabled ? 'disabled' : '',
      color ? 'color' : ''
    ]"
    v-on="$listeners">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'UIButton',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    color: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>

.button {
  padding: 10px;
  min-width: 200px;
  height: 50px;
  background: $onyx;
  color: white;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button:active {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.disabled {
  background: rgb(204, 204, 204);
  color: black;
  cursor: default;
  border: 1px solid gray;
  opacity: 0.5;
}

.color {
  background: $redorange;
}

</style>
