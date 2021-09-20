<template>
  <div class="dark:bg-gray-700 dark:bg-opacity-[25%] mx-auto rounded-xl shadow-md overflow-hidden my-4 md:my-12">
    <nuxt-link :to="{ name:'products', params: { category:product.category, slug:product.slug } }">
      <nuxt-img
        provider="cloudinary"
        width="450"
        height="450"
        quality="70"
        class="h-56 w-full object-cover"
        :src="product.imageUrl_3"
        :alt="product.slug"
      />
    </nuxt-link>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm font-semibold">
        {{ product.name }}
      </div>
      <a
        href="#"
        class="block mt-1 text-lg leading-tight font-medium hover:underline"
        target="_blank"
        rel="noopener"
      >
        {{ product.shortDescription }}
      </a>
      <p class="mt-2 text-gray-500">
        {{ product.description }}
      </p>
    </div>
  </div>
</template>

<script>
import { Component, mixins } from 'nuxt-property-decorator';
import App from '~/mixins/app';
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
export default class VerticalCard extends mixins(App) {

}
</script>

<style scoped>

</style>
