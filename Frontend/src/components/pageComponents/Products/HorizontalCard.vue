<template>
  <div class="max-w-md mx-auto dark:bg-gray-700 dark:bg-opacity-[25%] rounded-xl shadow-md overflow-hidden md:max-w-2xl">
    <div class="md:flex">
      <div class="md:flex-shrink-0">
        <nuxt-link :to="{ name:'products', params: { category:product.category, slug:product.slug } }">
          <nuxt-img
            provider="cloudinary"
            fit="contain"
            width="250"
            height="300"
            quality="70"
            class="w-full object-cover"
            :src="product.imageUrl_2"
            :alt="product.slug"
          />
        </nuxt-link>
      </div>
      <div class="p-4 xl:p-8">
        <div class="uppercase tracking-wide text-sm font-semibold">
          {{ product.name }}
        </div>
        <a
          href="#"
          target="_blank"
          rel="noopener"
          class="block mt-1 leading-tight font-medium hover:underline"
        >
          {{ product.shortDescription }}
        </a>
        <p class="mt-2  text-sm xl:text-lg text-[#858685]">
          {{ product.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, mixins } from 'nuxt-property-decorator';
import App from '@/mixins/app';

@Component({
  props: {
    product: {
      type: Object,
      required: true
    },
    slug: {
      type: String,
      default: null
    },
    category: {
      type: String,
      default: null
    }
  }
})

export default class HorizontalCard extends mixins(App) {

}
</script>

<style scoped>

</style>
