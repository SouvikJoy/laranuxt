<template>
  <div class="grid place-items-center h-screen">
    <h1 class="text-4xl">
      ContactPage - 1
    </h1>
  </div>
</template>

<script>
import { Component, mixins } from 'nuxt-property-decorator';
import App from '~/mixins/app';

@Component
export default class Contact extends mixins(App) {
  head () {
    return {
      title: 'Contact',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Contact Nuxt'
        }
      ]
    };
  }
}
</script>

<style scoped>

</style>
