<template>
  <div class="bg-white dark:bg-black shadow">
    <div class="bg-cyan-500">
      <div class="container mx-auto px-2">
        <div class="flex justify-between place-items-center py-1">
          <small class="text-[#3a3a3a]">
            Welcome to {{ appInfo.appName }}
          </small>
          <!--          <div class="flex gap-6">
            <div
              v-for="(socialIcon, index) in socialIcons"
              :key="index"
            >
              <a :href="socialIcon.url" target="_blank" rel="noopener">
                <nuxt-img
                  provider="cloudinary"
                  :src="socialIcon.iconUrl"
                  :alt="socialIcon.title"
                  height="20"
                  width="20"
                />
              </a>
            </div>
          </div>-->
        </div>
      </div>
    </div>

    <nav class="dt_defaultHeader_content">
      <div class="dt_defaultHeader_content_wrapper">
        <div class="dt_defaultHeader_content_menuIcon" @click.prevent="sidebarOpen = !sidebarOpen">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="fill-current"
          >
            <path
              d="M4 11h12v2H4zm0-5h16v2H4zm0 12h7.235v-2H4z"
            />
          </svg>
        </div>

        <NuxtLink
          :to="
            {
              name:
                'index'
            }"
          class="dt_defaultHeader_content_brand"
        >
          <nuxt-img
            provider="cloudinary"
            width="25"
            height="25"
            :src="appInfo.appIcon"
            :alt="appInfo.appName"
          />
          <h1 class="dt_defaultHeader_content_brandName">
            {{ appInfo.appName }}
          </h1>
        </NuxtLink>

        <div class="hidden md:block">
          <div class="flex place-items-center">
            <div>
              <ul>
                <li v-for="(navLink, index) in navLinks" :key="index">
                  <nuxt-link :to="{ name: navLink.to }" class="p-2">
                    {{ navLink.name }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
            <div class="p-2">
              Category
            </div>
          </div>
        </div>

        <div>
          <ColorModePicker />
        </div>
      </div>

      <MobileSidebar v-model="sidebarOpen">
        <div class="flex place-items-center justify-center mb-6 py-20">
          <nuxt-img
            provider="cloudinary"
            width="40"
            height="40"
            :src="appInfo.appIcon"
            :alt="appInfo.appName"
          />
          <h1 class="text-2xl">
            {{ appInfo.appName }}
          </h1>
        </div>
        <ul>
          <li v-for="(navLink, index) in navLinks" :key="index" class="list-item border-b-1 border-b-gray-700 hover:bg-cyan-400 hover:text-black px-[20px] py-[10px] ">
            <nuxt-link :to="{ name: navLink.to }" class="dt_defaultHeader_content_middle_link">
              {{ navLink.name }}
            </nuxt-link>
          </li>
        </ul>
      </MobileSidebar>
    </nav>
  </div>
</template>

<script>
import { Component, mixins } from 'nuxt-property-decorator';
import App from '~/mixins/app';
import MobileSidebar from '~/components/pageComponents/MobileSidebar';
import ColorModePicker from '~/components/ColorModePicker';

@Component({
  components: { ColorModePicker, MobileSidebar }
})

export default class DefaultHeader extends mixins(App) {
  sidebarOpen = false

  get socialIcons () {
    return this.$store.state.socialIcons;
  }

  get appInfo () {
    return this.$store.state.appInfo;
  }

  get navLinks () {
    return this.$store.state.navLinks;
  }
}
</script>

<style lang="scss">

</style>
