<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-1 sm:grid-cols-2 sm:px-8 sm:py-12 sm:gap-x-8 md:py-16">
      <div class="relative z-10 col-start-1 row-start-1 px-4 pt-40 xl:py-4 pb-3 bg-gradient-to-t from-black sm:bg-none">
        <p class="text-sm font-medium sm:mb-1 sm:text-gray-500">
          Brand / Category
        </p>
        <h2 class="text-xl font-semibold sm:text-2xl sm:leading-7 md:text-3xl">
          {{ product.name }}
        </h2>
      </div>
      <div class="col-start-1 row-start-2 px-4 sm:pb-16">
        <div class="flex items-center text-sm font-medium my-5 sm:mt-2 sm:mb-4">
          <svg
            width="20"
            height="20"
            fill="currentColor"
            class="text-yellow-600"
          >
            <path d="M9.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.784-.57-.381-1.81.587-1.81H7.03a1 1 0 00.95-.69L9.05 3.69z" />
          </svg>
          <div class="ml-1">
            <span>4.94</span>
            <span class="sm:hidden md:inline">(128)</span>
          </div>
          <div class="text-base font-normal mx-2">
            ·
          </div>
          <div>Mirpur, Dhaka</div>
        </div>
        <hr class="w-16 border-gray-300 hidden sm:block md:pb-6">
        <p class="text-[14px] leading-normal dark:text-gray-400">
          {{ product.description }}
        </p>
        <hr class="w-16 border-gray-300 hidden sm:block">
      </div>
      <div class="col-start-1 row-start-3 space-y-3 px-4">
        <p class="flex items-center text-sm font-medium">
          <nuxt-img
            provider="cloudinary"
            :src="product.imageUrl_3"
            :alt="product.slug"
            height="100%"
            width="100%"
            class="w-6 h-6 rounded-full mr-2 bg-gray-100"
          >
            Hosted by Debugger.tech
          </nuxt-img>
        </p>
        <button type="button" class="bg-cyan-100 text-cyan-700 text-base font-semibold px-6 py-2 rounded-lg">
          Check availability
        </button>
      </div>
      <div class="col-start-1 row-start-1 flex sm:col-start-2 sm:row-span-3">
        <div class="w-full grid grid-cols-3 grid-rows-2 gap-2">
          <div class="relative col-span-3 row-span-2 md:col-span-2 mt-6 md:mt-0">
            <nuxt-img
              provider="cloudinary"
              :src="product.imageUrl_1"
              :alt="product.slug"
              height="100%"
              width="100%"
              class="absolute inset-0 w-full h-full object-cover bg-gray-100 sm:rounded-lg"
            />
          </div>
          <div class="relative hidden md:block">
            <nuxt-img
              provider="cloudinary"
              :src="product.imageUrl_2"
              :alt="product.slug"
              height="100%"
              width="100%"
              class="absolute inset-0 w-full h-full object-cover rounded-lg bg-gray-100"
            />
          </div>
          <div class="relative hidden md:block">
            <nuxt-img
              provider="cloudinary"
              :src="product.imageUrl_3"
              :alt="product.slug"
              height="100%"
              width="100%"
              class="absolute inset-0 w-full h-full object-cover rounded-lg bg-gray-100"
            />
          </div>
        </div>
      </div>
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
    }
  }
})

export default class SingleProductCard extends mixins(App) {

}
</script>

<style scoped>

</style>
