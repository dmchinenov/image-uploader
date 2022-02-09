<template>
  <div id="app">
    <div class="app__container">
      <h1 class="app__title">
        Image Uploader
      </h1>
      <ImageUploader
        multiple
        :input-text="'Select images'"
        :send-text="'Upload Images'" />
    </div>
  </div>
</template>

<script>
import ImageUploader from '@/components/ImageUploader.vue';

export default {
  name: 'App',
  components: {
    ImageUploader,
  },
};
</script>

<style lang="scss">

.app__container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.app__title {
  font-weight: 300;
  font-size: 24px;
}
</style>
