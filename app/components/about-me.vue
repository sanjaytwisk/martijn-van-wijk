<script setup>
import { CircleCheckBig } from 'lucide-vue-next';
</script>

<template>
  <section id="over-mij section" class="about">
    <h2 class="t-2 t-center">Over mij</h2>
    <div class="columns">
      <p class="t-body">
        Martijn van Wijk is een onderhoud en klusbedrijf dat in 2021 is
        opgericht. Van kleine kluswerkzaamheden tot grote onderhoud- en
        renovatiewerkzaamheden. Martijn kan u met (bijna) alles helpen. Al vier
        jaar worden vele klanten met tevredenheid geholpen.
      </p>
      <ul class="activities t-body">
        <li>
          <CircleCheckBig />
          <p>Schilderwerk</p>
        </li>
        <li>
          <CircleCheckBig />
          <p>Stucwerk</p>
        </li>
        <li>
          <CircleCheckBig />
          <p>Tuinwerkzaamheden</p>
        </li>
        <li>
          <CircleCheckBig />
          <p>Timmerwerk</p>
        </li>
        <li>
          <CircleCheckBig />
          <p>Timmerwerk</p>
        </li>
        <li>
          <CircleCheckBig />
          <p>Onderhoud</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '~/assets/css/fluid-length.scss' as f;

.about {
  display: flex;
  flex-direction: column;
  gap: f.fluid-length(1.5, 6);
  padding: f.fluid-length(4, 8) f.fluid-length(1, 4);
}

.columns {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media (min-width: 900px) {
    flex-direction: row;
    align-items: center;

    > * {
      flex: 1;
    }
  }
}

.activities {
  list-style: none;
  padding: f.fluid-length(1.25, 2.75);
  background-color: rgb(var(--color-secondary));
  border-radius: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: f.fluid-length(0.5, 1);

  li {
    display: flex;
    align-items: center;
    gap: f.fluid-length(0.5, 0.75);
  }
}
</style>
