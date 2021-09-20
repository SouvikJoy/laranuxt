<template>
  <div>
    <ul>
      <li v-for="color of colors" :key="color">
        <component
          :is="`icon-${color}`"
          :class="getClasses(color)"
          @click="$colorMode.preference = color"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import { Component, mixins } from 'nuxt-property-decorator';
import IconSystem from '~/assets/icons/system.svg?inline';
import IconLight from '~/assets/icons/light.svg?inline';
import IconDark from '~/assets/icons/dark.svg?inline';

import App from '~/mixins/app';

@Component({
  components: {
    IconSystem,
    IconLight,
    IconDark
  }
})

export default class ColorModePicker extends mixins(App) {
  get colors () {
    return this.$store.state.colors;
  }

  getClasses (color) {
    if (this.$colorMode.unknown) {
      return {};
    }
    return {
      preferred: color === this.$colorMode.preference,
      selected: color === this.$colorMode.value
    };
  }
}
</script>

<style lang="scss">
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
ul li {
  display: inline-block;
  padding: 5px;
}
p {
  margin: 0;
  padding-top: 5px;
  padding-bottom: 20px;
}
.feather {
  position: relative;
  top: 0;
  cursor: pointer;
  padding: 2px;
  margin: 0;
  border-radius: 5px;
  transition: all 0.1s ease;
}

</style>
