<template>
  <div id="app" class="dark:bg-black dark:text-white">
    <header
      v-gsap.fromTo="[
        { y: 0 },
        { y: -25, duration: 0.00001,
          scrollTrigger: {
            trigger: '.index_2'
          } },
      ]"
      class="fixed w-full"
    >
      <DefaultHeader />
    </header>
    <main class="dark:bg-gray-700 dark:bg-opacity-[25%]">
      <nuxt :key="$route.fullPath" />
    </main>
    <footer class="default_footer">
      <DefaultFooter />
    </footer>
  </div>
</template>

<script>
import { Component, mixins } from 'nuxt-property-decorator';
import App from '~/mixins/app';
import DefaultHeader from '~/components/layouts/default/Header';
import DefaultFooter from '~/components/layouts/default/Footer';

@Component({
  components: {
    DefaultHeader,
    DefaultFooter
  }
})
export default class DefaultLayout extends mixins(App) {
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();

      setTimeout(() => this.$nuxt.$loading.finish(), 1500);
    });
  }
}
</script>
