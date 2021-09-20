<template>
  <div>
    <div class="index grid min-h-screen px-[20px] py-[80px] md:p-[100px] bg-opacity-50 text-white bg-no-repeat bg-cover" :style="{ backgroundImage: `url('https://res.cloudinary.com/souvik-joy/image/upload/v1631621592/5.avif')`, backgroundAttachment: 'fixed' }">
      <div class="index_1 grid md:grid-cols-2 md:gap-16 place-items-center container mx-auto">
        <div
          v-gsap.fromTo="[
            { opacity: 1, x: 0 },
            { opacity: 0, x: -1500, duration: 3,
              scrollTrigger: {
                trigger: '.index_2',
                scrub: true
              } },
          ]"
          class="test grid place-items-center md:block order-last xl:order-first"
        >
          <h1
            class="text-3xl md:text-7xl font-bold md:mb-2 text-center md:text-left"
          >
            {{ appInfo.heading }}
          </h1>
          <p
            class="text-md mb-0 md:text-3xl md:mb-4 text-center md:text-left text-cyan-500"
          >
            {{ appInfo.subHeading }}
          </p>
          <p
            class="px-4 md:px-0 text-[12px] md:text-[16px] px-6 md:px-0 dark:text-gray-400 text-gray-600 text-center md:text-left leading-[24px] md:leading-normal"
          >
            {{ appInfo.description }}
          </p>
          <button
            class="px-6 py-2 rounded text-sm md:px-16 md:py-4 bg-gradient-to-br from-cyan-400 to-light-blue-500 md:rounded-2xl hover:shadow-lg hover:bg-purple-500 md:text-xl font-bold"
            @click.prevent="modalOpen = !modalOpen"
          >
            Query
          </button>
        </div>
        <nuxt-img
          v-gsap.fromTo="[
            { opacity: 1, x: 0 },
            { opacity: 0, x: 1500, duration: 3,
              scrollTrigger: {
                trigger: '.index_2',
                scrub: true
              } },
          ]"
          provider="cloudinary"
          src="landing.webp"
          class="p-10 md:p-0"
          alt="landing image"
          width="450"
          height="450"
          quality="70"
        />
      </div>
    </div>

    <div class="index_2 dt_index_page_2 md:py-20">
      <div class="container mx-auto py-6">
        <div class="flex place-items-center gap-4 px-10">
          <hr
            v-gsap.fromTo="[
              { opacity: 0, x: -3500 },
              { opacity: 1, x: 0, duration: 3,
                scrollTrigger: {
                  trigger: '.index_1'
                } },
            ]"
            class="border-4 w-full border-cyan-400"
          >
          <div
            v-gsap.fromTo="[
              { opacity: 0, x: 3500 },
              { opacity: 1, x: 0, duration: 3,
                scrollTrigger: {
                  trigger: '.index_1'
                } },
            ]"
            class="text-lg md:text-2xl xl:text-5xl font-bold py-6"
          >
            PRODUCT CAN PRODUCE BY MORGAN DESIGN
          </div>
        </div>
        <p
          v-gsap.fromTo="[
            { opacity: 0 },
            { opacity: 1, duration: 3,
              scrollTrigger: {
                trigger: '.index_2'
              } },
          ]"
          class="px-4 md:px-0 text-[14px] md:text-[16px] text-gray-600 dark:text-gray-400 text-center md:text-left leading-[24px] md:leading-normal"
        >
          {{ appInfo.longDescription }}
        </p>
        <div class="grid justify-center grid-cols-2 xl:grid-cols-4 md:place-items-center gap-4">
          <div v-for="(productCategory, index) in productCategories" :key="index" class="mx-6 md:mx-0">
            <nuxt-img
              v-gsap.fromTo="[
                { opacity: 0, x: 3500 },
                { opacity: 1, x: 0, duration: 3, stagger: 5,
                  scrollTrigger: {
                    trigger: '.index_1'
                  } },
              ]"
              provider="cloudinary"
              fit="contain"
              :src="productCategory.categoryCover"
              :alt="productCategory.title"
              width="250"
              height="320"
              quality="70"
              :modifiers="{ roundCorner: '0:25' }"
            />
            <div
              v-gsap.fromTo="[
                { opacity: 0, x: 3500 },
                { opacity: 1, x: 0, duration: 3,
                  stagger: 0.5,
                  scrollTrigger: {
                    trigger: '.index_1'
                  } },
              ]"
              class="text-center text-2xl font-bold py-6"
            >
              {{ productCategory.title }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="index_3 dt_index_page_2 md:py-20">
      <div class="container mx-auto">
        <div class="flex place-items-center gap-4 px-10">
          <div
            v-gsap.fromTo="[
              { opacity: 0, x: -3500 },
              { opacity: 1, x: 0, duration: 3,
                scrollTrigger: {
                  trigger: '.index_2'
                } },
            ]"
            class="text-2xl md:text-5xl font-bold py-6"
          >
            Services
          </div>
          <hr
            v-gsap.fromTo="[
              { opacity: 0, x: 3500 },
              { opacity: 1, x: 0, duration: 3,
                scrollTrigger: {
                  trigger: '.index_2'
                } },
            ]"
            class="border-4 w-full border-cyan-400"
          >
        </div>
        <p
          v-gsap.fromTo="[
            { opacity: 0 },
            { opacity: 1, duration: 3,
              scrollTrigger: {
                trigger: '.index_3'
              } },
          ]"
          class="px-4 md:px-0 text-[14px] md:text-[16px] text-gray-600 dark:text-gray-400 text-center md:text-left leading-[24px] md:leading-normal"
        >
          {{ appInfo.longDescription }}
        </p>
        <div class="grid md:grid-cols-2 md:place-items-center md:grid-flow-col gap-4">
          <div class="row-span-2 self-center">
            <nuxt-img
              v-gsap.fromTo="[
                { opacity: 0, x: -3500 },
                { opacity: 1, x: 0, duration: 3,
                  scrollTrigger: {
                    trigger: '.index_2'
                  } },
              ]"
              provider="cloudinary"
              src="bg-3.avif"
              alt="background image"
              width="700"
              height="450"
              quality="70"
            />
          </div>
          <div
            v-gsap.fromTo="[
              { opacity: 0, x: 3500 },
              { opacity: 1, x: 0, duration: 3,
                scrollTrigger: {
                  trigger: '.index_2'
                } },
            ]"
            class="grid grid-cols-2"
          >
            <div v-for="(service, index) in services" :key="index">
              <ServiceBox :service="service" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="index_4 container mx-auto md:py-20">
      <div class="flex place-items-center gap-4 px-10">
        <hr
          v-gsap.fromTo="[
            { opacity: 0, x: -3500 },
            { opacity: 1, x: 0, duration: 3,
              scrollTrigger: {
                trigger: '.index_3'
              } },
          ]"
          class="border-4 w-full border-cyan-400"
        >
        <div
          v-gsap.fromTo="[
            { opacity: 0, x: 3500 },
            { opacity: 1, x: 0, duration: 3,
              scrollTrigger: {
                trigger: '.index_3'
              } },
          ]"
          class="text-2xl md:text-5xl font-bold py-6"
        >
          Products
        </div>
      </div>
      <p
        v-gsap.fromTo="[
          { opacity: 0 },
          { opacity: 1, duration: 3,
            scrollTrigger: {
              trigger: '.index_4'
            } },
        ]"
        class="px-4 md:px-0 text-[14px] md:text-[16px] text-gray-600 dark:text-gray-400 text-center md:text-left leading-[24px] md:leading-normal"
      >
        {{ appInfo.longDescription }}
      </p>
      <div
        v-gsap.fromTo="[
          { opacity: 0, x: -3500 },
          { opacity: 1, x: 0, duration: 3, stagger: 0,
            scrollTrigger: {
              trigger: '.index_3'
            } },
        ]"
        class="grid md:grid-cols-2 gap-8"
      >
        <div v-for="(product, index) in products" :key="index">
          <HorizontalCard :product="product" class="mx-6 md:mx-0" />
        </div>
      </div>
    </div>

    <div class="index_5 dt_index_page_2 md:py-20">
      <div class="container mx-auto py-6">
        <div class="flex place-items-center gap-4 px-10">
          <div
            v-gsap.fromTo="[
              { opacity: 0, x: -200 },
              { opacity: 1, x: 0, duration: 3,
                scrollTrigger: {
                  trigger: '.index_4'
                } },
            ]"
            class="text-2xl md:text-5xl font-bold py-6"
          >
            Gallery
          </div>
          <hr
            v-gsap.fromTo="[
              { opacity: 0, x: 200 },
              { opacity: 1, x: 0, duration: 3,
                scrollTrigger: {
                  trigger: '.index_5'
                } },
            ]"
            class="border-4 w-full border-cyan-400"
          >
        </div>
        <p
          v-gsap.fromTo="[
            { opacity: 0 },
            { opacity: 1, duration: 3,
              scrollTrigger: {
                trigger: '.index_5'
              } },
          ]"
          class="px-4 md:px-0 text-[14px] md:text-[16px] text-gray-600 dark:text-gray-400 text-center md:text-left leading-[24px] md:leading-normal py-4"
        >
          {{ appInfo.longDescription }}
        </p>
        <div
          v-gsap.fromTo="[
            { opacity: 0 },
            { opacity: 1, duration: 3,
              scrollTrigger: {
                trigger: '.index_5'
              } },
          ]"
          class="grid grid-cols-2 md:grid-cols-3 place-items-center gap-4"
        >
          <div v-for="(galleryImage, index) in galleryImages" :key="index">
            <GalleryImage :gallery-image="galleryImage" />
          </div>
        </div>
      </div>
    </div>

    <div class="index_6 dt_index_page_2 md:py-20">
      <div class="container mx-auto py-6">
        <div class="grid md:grid-cols-2 md:place-items-center md:grid-flow-col gap-4">
          <div
            v-gsap.fromTo="[
              { opacity: 0, x: -3500 },
              { opacity: 1, x: 0, duration: 3,
                scrollTrigger: {
                  trigger: '.index_5'
                } },
            ]"
            class="grid grid-cols-2"
          >
            <div v-for="(service, index) in services" :key="index">
              <ServiceBox :service="service" />
            </div>
          </div>
          <div class="row-span-2 self-center mb-4">
            <nuxt-img
              v-gsap.fromTo="[
                { opacity: 0, x: 3500 },
                { opacity: 1, x: 0, duration: 3,
                  scrollTrigger: {
                    trigger: '.index_5'
                  } },
              ]"
              provider="cloudinary"
              src="bg-3.avif"
              alt="background image"
              width="700"
              height="450"
              quality="70"
            />
          </div>
        </div>
        <div class="flex place-items-center gap-4 px-10">
          <div
            v-gsap.fromTo="[
              { opacity: 0, x: -3500 },
              { opacity: 1, x: 0, duration: 3,
                scrollTrigger: {
                  trigger: '.index_5'
                } },
            ]"
            class="text-2xl md:text-5xl font-bold py-6"
          >
            Experiences
          </div>
          <hr class="border-4 w-full border-cyan-400">
        </div>
        <p
          v-gsap.fromTo="[
            { opacity: 0 },
            { opacity: 1, duration: 3,
              scrollTrigger: {
                trigger: '.index_6'
              } },
          ]"
          class="px-4 md:px-0 text-[14px] md:text-[16px] text-gray-600 dark:text-gray-400 text-center md:text-left leading-[24px] md:leading-normal"
        >
          {{ appInfo.longDescription }}
        </p>
      </div>
    </div>

    <QueryModal
      v-model="modalOpen"
      class="text-center"
    >
      <p class="text-2xl md:text-5xl font-bold">
        Query Form
      </p>
      <div class="grid place-items-center py-6">
        <form action="" class="self-start">
          <input
            id="firstname"
            type="text"
            name="firstname"
            placeholder="Your name.."
            class="w-full md:w-[40%] dark:bg-gray-700 dark:text-white"
          >

          <input
            id="lastname"
            type="text"
            name="lastname"
            placeholder="Your last name.."
            class="w-full md:w-[40%] dark:bg-gray-700 dark:text-white"
          >
          <input
            id="email"
            type="text"
            name="email"
            placeholder="Your email.."
            class="w-full md:w-[80%] dark:bg-gray-700 dark:text-white"
          >

          <select id="country" name="country" class="w-full md:w-[80%] mb-4 p-2 dark:bg-gray-700 dark:text-white">
            <option value="bangladesh">
              Bangladesh
            </option>
            <option value="australia">
              Australia
            </option>
            <option value="canada">
              Canada
            </option>
            <option value="usa">
              USA
            </option>
          </select>

          <textarea
            id="subject"
            placeholder="Write something.."
            class="w-full md:w-[80%] p-6 dark:bg-gray-700 dark:text-white h-[200px]"
          />

          <input type="submit" value="Submit" class="w-full md:w-[80%] bg-cyan-400">
        </form>
      </div>
    </QueryModal>
  </div>
</template>

<script>
import { Component, mixins } from 'nuxt-property-decorator';
import App from '~/mixins/app';
import ServiceBox from '~/components/pageComponents/Index/ServiceBox';
import QueryModal from '~/components/pageComponents/Index/QueryModal';
import GalleryImage from '~/components/pageComponents/Index/Gallery/GalleryImage';
import HorizontalCard from '~/components/pageComponents/Products/HorizontalCard';

@Component({
  head () {
    return {
      title: 'Home',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Home page description'
        }
      ]
    };
  },
  components: {
    HorizontalCard,
    GalleryImage,
    QueryModal,
    ServiceBox
  }
})
export default class Index extends mixins(App) {
  modalOpen = false

  get products () {
    return this.$store.state.product.all;
  }

  get services () {
    return this.$store.state.services;
  }

  get appInfo () {
    return this.$store.state.appInfo;
  }

  get galleryImages () {
    return this.$store.state.gallery;
  }

  get productCategories () {
    return this.$store.state.product.categories;
  }
}
</script>

<style lang="scss">
input[type=text], select, textarea {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
