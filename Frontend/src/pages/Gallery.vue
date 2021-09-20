<template>
  <div class="grid place-items-center min-h-screen py-16">
    <div class="container mx-auto py-6">
      <div class="text-center">
        <p class="text-2xl md:text-5xl font-bold py-6">
          Gallery
        </p>
        <p class="px-4 md:px-0 text-[14px] md:text-[16px] text-gray-600 text-center md:text-left leading-[24px] md:leading-normal py-4">
          {{ appInfo.longDescription }}
        </p>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 place-items-center gap-4">
        <div v-for="(galleryImage, index) in galleryImages" :key="index">
          <GalleryImage :gallery-image="galleryImage" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, mixins } from 'nuxt-property-decorator';
import App from '~/mixins/app';
import GalleryImage from '~/components/pageComponents/Index/Gallery/GalleryImage';
@Component({
  components: { GalleryImage }
})
export default class Gallery extends mixins(App) {
  head () {
    return {
      title: 'Gallery',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Gallery Nuxt'
        }
      ]
    };
  }

  get appInfo () {
    return this.$store.state.appInfo;
  }

  get galleryImages () {
    return this.$store.state.gallery;
  }
}
</script>

<style scoped>

</style>
