<template>
  <div class="modal">
    <div
      v-show="modalOpen"
      v-if="modalOpen"
      class="modal-backdrop"
      @click="closeModal"
    />
    <transition name="slide">
      <div
        v-if="modalOpen"
        class="modal-panel bg-white dark:bg-gray-800 dark:text-white"
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
  modalOpen = false

  closeModal () {
    this.modalOpen = false;
  }

  get modalOpen () {
    return this.value;
  }

  set modalOpen (value) {
    this.$emit('input', value);
  }
}

</script>

<style lang="scss">
.modal-backdrop {
  background-color: rgba(0,0,0,.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  cursor: pointer;
}

.modal-panel {
  overflow-y: auto;
  position: fixed;
  top: 15%;
  left: 10%;
  height: 80vh;
  z-index: 999;
  padding: 3rem 20px 2rem 20px;
  width: 80vw;
  border-radius: 20px;
}
</style>
