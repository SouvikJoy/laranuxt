<template>
  <div class="min-h-screen">
    <div
      v-if="!slug"
      class="container mx-auto pt-24 md:pt-36"
    >
      <div class="text-center">
        <div class="text-5xl font-bold mb-6">
          Products
        </div>
        <p class="text-sm dark:text-gray-400">
          {{ appInfo.description }}
        </p>
      </div>
      <div class="grid md:grid-cols-3 place-items-center gap-x-0 md:gap-x-8">
        <div
          v-for="(product, index) in products"
          :key="index"
        >
          <VerticalCard
            :product="product"
          />
        </div>
      </div>
    </div>

    <div v-for="(product, index) in products" :key="index">
      <div v-if="product.slug === slug">
        <SingleProductView
          :product="product"
          class="py-20"
        />
      </div>
    </div>

    <div class="container mx-auto">
      <p class="text-lg md:text2xl xl:text-5xl font-bold">
        Related Products
      </p>
      <hr class="p-12">
    </div>
  </div>
</template>

<script>
import { Component, mixins } from 'nuxt-property-decorator';
import App from '~/mixins/app';
import SingleProductView from '~/components/pageComponents/Products/SingleProductView';
import VerticalCard from '~/components/pageComponents/Products/VerticalCard';
import HorizontalCard from '~/components/pageComponents/Products/HorizontalCard';
@Component({
  props: {
    slug: {
      type: String,
      default: null
    },
    category: {
      type: String,
      default: null
    }
  },

  components: { HorizontalCard, VerticalCard, SingleProductView }
})
export default class Products extends mixins(App) {
  head () {
    return {
      title: 'Products',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Products Nuxt'
        }
      ]
    };
  }

  get appInfo () {
    return this.$store.state.appInfo;
  }

  get products () {
    return this.$store.state.product.all;
  }
}
</script>

<style scoped>

</style>
