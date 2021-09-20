<template>
  <div class="flex justify-around place-items-center">
    <div>
      &copy; {{ new Date().getFullYear() }} |
      <a
        href="https://debugger.tech"
        rel="noopener"
        target="_blank"
        class="dark:text-white font-bold"
      >
        Debugger.tech
      </a>
    </div>
  </div>
</template>

<script>
import { Component, mixins } from 'nuxt-property-decorator';
import App from '~/mixins/app';
@Component({
  components: { }
})
export default class DefaultFooter extends mixins(App) {

}
</script>

<style lang="scss">

</style>
