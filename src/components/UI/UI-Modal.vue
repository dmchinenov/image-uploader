<template>
  <div
    class="modal"
    @click="close">
    <div class="modal__container">
      <slot
        name="modal__body" />
      <eva-icon
        name="close"
        class="modal__close-icon"
        animation="pulse"
        :width="40"
        :height="40"
        @click="close()" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'UIModal',
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal__container {
  position: relative;
}

.modal__close-icon {
  position: absolute;
  right: -40px;
  top: -40px;
  cursor: pointer;
}
</style>
