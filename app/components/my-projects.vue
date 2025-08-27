<script setup>
import 'vue3-carousel/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { ArrowLeft } from 'lucide-vue-next';

const slides = [
  {
    id: 1,
    src: '/projecten/1.jpg',
    alt: 'Project 1',
  },
  {
    id: 2,
    src: '/projecten/2.jpg',
    alt: 'Project 2',
  },
  {
    id: 3,
    src: '/projecten/3.jpg',
    alt: 'Project 3',
  },
  {
    id: 4,
    src: '/projecten/4.jpg',
    alt: 'Project 4',
  },
  {
    id: 5,
    src: '/projecten/5.jpg',
    alt: 'Project 5',
  },
  {
    id: 6,
    src: '/projecten/6.jpg',
    alt: 'Project 6',
  },
  {
    id: 7,
    src: '/projecten/7.jpg',
    alt: 'Project 7',
  },
];

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
  <section class="section projects">
    <h2 class="t-2 t-center">Projecten</h2>
    <Carousel v-bind="carouselConfig">
      <Slide v-for="slide in slides" :key="slide.id">
        <img class="image" :src="slide.src" :alt="slide.alt" />
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
