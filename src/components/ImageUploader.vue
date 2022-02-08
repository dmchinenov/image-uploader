<template>
  <div
    class="image__uploader"
    :class="getLoadingStatus ? 'image__uploader-loading' : ''">
    <form class="form">
      <div class="form__input-container">
        <UI-Button
          color
          @click.prevent="handlerInput">
          <eva-icon
            name="file-add"
            fill="white"
            class="form__input-icon" />
          {{ inputText }}
        </UI-Button>
        <input
          ref="input"
          class="form__input"
          multiple
          :disabled="disabled"
          accept=".jpg, .jpeg, .png"
          type="file"
          @change="uploadFiles">
      </div>
      <div
        v-if="images.length"
        class="form__mini-picks">
        <div
          v-for="img, index in images"
          :key="index"
          class="form__mini-pick-box"
          @click.stop="openImage(img)">
          <img
            :src="img"
            class="form__mini-pick">
          <div
            class="form__pick-del-icon"
            @click.stop="deleteImage(index)">
            <eva-icon
              animation="pulse"
              name="close-circle-outline"
              fill="white" />
          </div>
        </div>
      </div>
      <UI-Button
        :disabled="!isDisabledSendButton"
        class="form__button"
        @click.prevent="uploadImages">
        {{ sendText }}
      </UI-Button>
      <span
        v-if="textNotify"
        class="form__notify">{{ textNotify }}</span>
    </form>
    <UIModal
      v-if="showModal"
      @close="closeModal">
      <template #modal__body>
        <img
          :src="imageForModal"
          class="form__modal-image">
      </template>
    </UIModal>
  </div>
</template>

<script>
export default {
  name: 'ImageUploader',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    inputText: {
      type: String,
      default: 'Select',
    },
    sendText: {
      type: String,
      default: 'Upload',
    },
  },
  data: () => ({
    images: [],
    showModal: false,
    imageForModal: '',
    textNotify: '',
  }),
  methods: {
    handlerInput() {
      this.$refs.input.click();
    },
    uploadFiles() {
      const imageFiles = Object.values(this.$refs.input.files);
      console.log(imageFiles);
      imageFiles.forEach((item) => {
        const reader = new FileReader();
        reader.onload = (image) => {
          this.images.push(image.target.result);
        };
        reader.readAsDataURL(item);
      });
    },
    uploadImages() {
      this.textNotify = '';
      this.$store.commit('uploadImageModule/setImages', this.images);
      this.$store.dispatch('uploadImageModule/uploadImages')
        .then(() => {
          this.images = [];
          this.textNotify = 'Данные отправлены успешно';
        })
        .catch(() => {
          this.textNotify = 'Ошибка, повторите ещё раз';
        });
    },
    deleteImage(index) {
      this.images.splice(index, 1);
    },
    openImage(image) {
      this.imageForModal = image;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.imageForModal = '';
    },
  },
  computed: {
    isDisabledSendButton() {
      return this.images.length;
    },
    getLoadingStatus() {
      return this.$store.getters['uploadImageModule/getLoadingStatus'];
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  border: 1px solid $onyx;
  padding: 50px;
  max-width: 800px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.form__input-container {
  display: flex;
  flex-direction: column;
}

.form__button {
  margin-top: 30px;
}

.form__input {
  display: none;
}

.form__input-icon {
  margin-right: 10px;
}

.form__mini-picks {
  max-width: 500px;
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 10px;
  max-height: 340px;
  overflow: auto;
}

.form__mini-pick-box {
  position: relative;
}

.form__mini-pick {
  height: 100px;
  width: 100px;
  object-fit: cover;
  cursor: pointer;
  &:hover + .form__pick-del-icon {
    display: block;
  }
}

.form__pick-del-icon {
  display: none;
  cursor: pointer;
  position: absolute;
  top: 2px;
  right: 2px;
  &:hover {
    display: block;
  };
}

.form__modal-image {
  max-width: 80vw;
  max-height: 80vh;
  position: relative;
}

.image__uploader-loading {
  opacity: 0.3;
  pointer-events: none;
}

.form__notify {
  margin-top: 10px;
}

</style>
