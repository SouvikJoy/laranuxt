<template>
  <div class="grid place-items-center min-h-screen pt-24">
    <div class="container mx-auto py-6">
      <div class="text-2xl text-center md:text-5xl font-bold py-6">
        Our Services
      </div>
      <p class="px-4 md:px-0 text-[14px] md:text-[16px] dark:text-gray-400 text-gray-600 text-center md:text-left leading-[24px] md:leading-normal">
        {{ appInfo.longDescription }}
      </p>
      <div class="grid md:grid-cols-2 md:place-items-center md:grid-flow-col gap-4">
        <div class="row-span-2 self-center">
          <nuxt-img
            provider="cloudinary"
            src="bg-3.avif"
            alt="background image"
            width="700"
            height="450"
            quality="70"
          />
        </div>
        <div class="grid grid-cols-2">
          <div v-for="(service, index) in services" :key="index">
            <ServiceBox :service="service" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, mixins } from 'nuxt-property-decorator';
import App from '~/mixins/app';
import ServiceBox from '~/components/pageComponents/Index/ServiceBox';

@Component({
  components: { ServiceBox }
})

export default class About extends mixins(App) {
  head () {
    return {
      title: 'About',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'About Nuxt'
        }
      ]
    };
  }

  get services () {
    return this.$store.state.services;
  }

  get appInfo () {
    return this.$store.state.appInfo;
  }
}
</script>

<style lang="scss">

</style>
