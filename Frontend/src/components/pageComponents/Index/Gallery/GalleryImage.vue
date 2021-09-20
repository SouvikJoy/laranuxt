<template>
  <div>
    <div @click.prevent="imageViewerOpen = !imageViewerOpen">
      <nuxt-img
        provider="cloudinary"
        :src="galleryImage.image"
        :alt="galleryImage.title"
        width="450"
        height="300"
        quality="70"
      />
    </div>

    <div class="grid place-items-center justify-center">
      <div
        v-show="imageViewerOpen"
        class="image-viewer-backdrop"
        @click="closeImageViewer"
      />
      <transition name="slide">
        <div
          v-if="imageViewerOpen"
          class="image-viewer-panel bg-white dark:bg-gray-800 dark:text-white w-[60vh] top-[35%] left-0 md:w-[100vh] md:top-[15%] md:left-[20%]"
        >
          <nuxt-img
            provider="cloudinary"
            :src="galleryImage.image"
            :alt="galleryImage.title"
            width="450"
            height="300"
            quality="70"
          />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { Component, mixins } from 'nuxt-property-decorator';
import App from '~/mixins/app';

@Component({
  props: {
    galleryImage: {
      type: Object,
      required: true
    }
  }
})

export default class ImageViewer extends mixins(App) {
  imageViewerOpen = false

  closeImageViewer () {
    this.imageViewerOpen = false;
  }
}

</script>

<style lang="scss">
.image-viewer-backdrop {
  background-color: rgba(0, 0, 0, .95);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  cursor: pointer;
}

.image-viewer-panel {
  overflow-y: auto;
  position: fixed;
  z-index: 999;
}
</style>
