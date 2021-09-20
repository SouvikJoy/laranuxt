<template>
  <div class="p-6">
    <nuxt-img
      provider="cloudinary"
      width="100"
      height="100"
      :src="service.serviceIcon"
      :alt="service.name"
      class="mb-2"
    />
    <p class="text-2xl md:text-3xl md:mb-4">
      {{ service.name }}
    </p>
    <p class="text-[14px] md:text-[16px] text-gray-600 dark:text-gray-400">
      {{ service.description }}
    </p>
  </div>
</template>

<script>
import { Component, mixins } from 'nuxt-property-decorator';
import App from '~/mixins/app';
@Component({
  props: {
    service: {
      type: Object,
      required: true
    }
  },
  components: {

  }
})
export default class ServiceBox extends mixins(App) {

}
</script>

<style>

</style>
