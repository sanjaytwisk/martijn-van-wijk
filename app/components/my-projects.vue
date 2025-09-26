<script setup>
import 'vue3-carousel/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { ArrowLeft } from 'lucide-vue-next';

const slides = Array.from(new Array(7))
  .map((_, index) => index + 1)
  .map((id) => ({
    id: id,
    src: `/projecten/${id}.jpg`,
    alt: `Project ${id}`,
  }));

const carouselConfig = {
  height: 400,
  itemsToShow: 1.25,
  snapAlign: 'center',
  gap: 20,
  wrapAround: true,
  breakpoints: {
    768: {
      height: 500,
      itemsToShow: 2.5,
      snapAlign: 'start',
    },
    1024: {
      height: 550,
      itemsToShow: 3.75,
    },
  },
};
</script>

<template>
  <section id="projecten" class="section projects">
    <h2 class="t-2 t-center">Projecten</h2>
    <Carousel v-bind="carouselConfig">
      <Slide v-for="slide in slides" :key="slide.id">
        <img class="image" loading="lazy" :src="slide.src" :alt="slide.alt" />
      </Slide>

      <template #addons>
        <Navigation>
          <template #prev>
            <span class="nav left"><ArrowLeft /></span>
          </template>
          <template #next>
            <span class="nav right"><ArrowLeft /></span>
          </template>
        </Navigation>
        <Pagination />
      </template>
    </Carousel>
  </section>
</template>

<style scoped lang="scss">
@use '~/assets/css/fluid-length' as f;
.projects {
  padding-left: 0;
  padding-right: 0;
}

.nav {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: rgb(var(--color-white));
  border: 1px solid rgb(var(--color-primary));
  color: var(--color-white);
  display: flex;
  justify-content: center;
  align-items: center;
}

.right {
  transform: rotate(180deg);
}

.image {
  width: 100%;
  height: 100%;
  border-radius: 0.75rem;
  object-fit: cover;
  object-position: center;
}
</style>

<style>
.carousel__prev {
  left: 1rem;
}
.carousel__next {
  right: 1rem;
}

.carousel {
  --vc-png-bottom: -1rem;
}

.carousel__viewport {
  padding: 1rem 0;
}

@media (min-width: 600px) {
  .carousel__prev {
    left: 2rem;
  }
  .carousel__next {
    right: 2rem;
  }
  .carousel__next--disabled,
  .carousel__prev--disabled {
    opacity: 0;
  }
}
</style>
