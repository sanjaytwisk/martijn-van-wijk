<script setup>
import 'vue3-carousel/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import { ArrowLeft } from 'lucide-vue-next';
const carouselConfig = {
  height: 250,
  itemsToShow: 1.25,
  snapAlign: 'center',
  wrapAround: true,
  gap: 32,
};
</script>

<template>
  <section class="section testimonials" id="testimonials">
    <h2 class="t-2 t-center">Testimonials</h2>
    <Carousel v-bind="carouselConfig">
      <Slide :key="testimonial1">
        <article class="testimonial">
          <blockquote class="t-3 quote">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </blockquote>
        </article>
      </Slide>
      <Slide :key="testimonial2">
        <article class="testimonial">
          <blockquote class="t-3 quote">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </blockquote>
        </article>
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
      </template>
    </Carousel>
  </section>
</template>

<style scoped lang="scss">
.testimonials {
  background-image: linear-gradient(
    to top,
    rgb(var(--color-secondary)) 0%,
    transparent 50%
  );
  padding: 0;
  padding-bottom: 10vw;
}

.testimonial {
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgb(var(--color-primary) / 0.15);
  border: 1px solid rgb(var(--color-tertiary));
  background-color: rgb(var(--color-white));
  max-width: 40rem;
}

.quote {
  display: flex;
  flex-direction: column;
  margin: 0;
  &::before {
    display: block;
    position: relative;
    top: 0.3em;
    content: '“';
    font-size: 3em;
    line-height: 0.4;
    color: rgb(var(--color-tertiary));
  }
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
</style>
