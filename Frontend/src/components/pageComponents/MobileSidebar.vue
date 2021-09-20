<template>
  <div class="sidebar">
    <div
      v-show="sidebarOpen"
      v-if="sidebarOpen"
      class="sidebar-backdrop"
      @click="closeSidebarPanel"
    />
    <transition name="slide">
      <div
        v-if="sidebarOpen"
        class="sidebar-panel bg-white dark:bg-black dark:text-white"
      >
        <slot />
      </div>
    </transition>
  </div>
</template>

<script>
import { Component, mixins } from 'nuxt-property-decorator';
import App from '~/mixins/app';

@Component({
  props: {
    value: {
      type: Boolean,
      required: true
    }
  }
})

export default class MobileSidebar extends mixins(App) {
  sidebarOpen = false

  closeSidebarPanel () {
    this.sidebarOpen = false;
  }

  get sidebarOpen () {
    return this.value;
  }

  set sidebarOpen (value) {
    this.$emit('input', value);
  }
}

</script>

<style lang="scss">
.slide-enter-active,
.slide-leave-active
{
  transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
  transition: all 150ms ease-in 0s
}

.sidebar-backdrop {
  background-color: rgba(0,0,0,.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  cursor: pointer;
}

.sidebar-panel {
  overflow-y: auto;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 999;
  width: 300px;
}
</style>
