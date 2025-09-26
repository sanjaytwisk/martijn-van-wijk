<script setup>
import 'vue3-carousel/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import { ArrowLeft } from 'lucide-vue-next';
const carouselConfig = {
  itemsToShow: 1.25,
  snapAlign: 'center',
  wrapAround: true,
  gap: 32,
};
</script>

<template>
  <section id="testimonials" class="section testimonials">
    <h2 class="t-2 t-center">Testimonials</h2>
    <Carousel v-bind="carouselConfig">
      <Slide :key="'testimonial1'">
        <article class="testimonial">
          <blockquote class="t-3 quote">
            Martijn is een topper. Makkelijk contact en luistert goed naar wat
            je nodig hebt. Is flexibel. En voert zijn werk vakkundig uit.
            Aanrader!
          </blockquote>
          <cite class="t-body">- Eveline</cite>
        </article>
      </Slide>
      <Slide :key="'testimonial2'">
        <article class="testimonial">
          <blockquote class="t-3 quote">
            Martijn is niet alleen deskundig, maar ook fijn in de omgang. Hij is
            betrouwbaar, denkt mee, werkt zorgvuldig, altijd met oog voor detail
            en levert topkwaliteit.
          </blockquote>
          <cite class="t-body">- Anna en Dirk</cite>
        </article>
      </Slide>
      <Slide :key="'testimonial2'">
        <article class="testimonial">
          <blockquote class="t-3 quote">
            Martijn heeft de afgelopen jaren meerdere werkzaamheden in en rondom
            ons huis verricht (o.m. isoleren vloer, aanleggen tuin met schuur en
            verfwerk). Alles altijd goed, netjes en op tijd uitgevoerd, waarbij
            op voorhand duidelijkheid bestond over de kosten. Ten slotte is
            Martijn een prettig en betrouwbaar persoon; aanrader dus!
          </blockquote>
          <cite class="t-body">- Nina en Sander</cite>
        </article>
      </Slide>
      <Slide :key="'testimonial2'">
        <article class="testimonial">
          <blockquote class="t-3 quote">
            We hebben Martijn in geschakeld om onze geoliede vloer te lakken en
            een vloer te schilderen. Hij heeft dit echt heel zorgvuldig opgepakt
            en heel veel met de hand geschuurd wat niet met de machine ging. We
            zijn dankbaar voor zijn expertise en advies en bovenal het
            resultaat. Het is fijn om met hem te communiceren en te plannen. We
            zouden hem zo opnieuw inhuren!
          </blockquote>
          <cite class="t-body">- Jeroen en Frank</cite>
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
@use '~/assets/css/fluid-length' as f;
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

  cite {
    display: block;
    color: rgb(var(--color-tertiary));
    margin-top: f.fluid-length(0.25, 0.5);
  }
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
