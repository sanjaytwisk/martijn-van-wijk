<template>
  <section id="werkwijze" class="section">
    <h2 class="t-2 t-center">Werkwijze</h2>
    <ol class="approach">
      <li>
        <p class="t-body t-bold">Wensen & Prijsopgave</p>
        <p class="t-body-sm">
          Martijn komt bij u langs om de werkzaamheden te bespreken. U ontvangt
          hierna een informele prijsopgave, zodat u weet wat u ongeveer kunt
          verwachten
        </p>
      </li>
      <li>
        <p class="t-body t-bold">Offerte</p>
        <p class="t-body-sm">
          Als deze naar wens is, ontvangt u een offerte. Bij akkoord, volgt er
          een factuur voor een aanbetaling
        </p>
      </li>
      <li>
        <p class="t-body t-bold">Planning</p>
        <p class="t-body-sm">
          Na ontvangst van deze betaling worden de werkzaamheden ingepland
        </p>
      </li>
      <li>
        <p class="t-body t-bold">Oplevering</p>
        <p class="t-body-sm">
          Na oplevering volgt de eindfactuur. De aanbetaling wordt in mindering
          gebracht.
        </p>
      </li>
    </ol>
  </section>
</template>
<style scoped lang="scss">
@use '~/assets/css/fluid-length' as f;
.approach {
  max-width: 44rem;
  margin: 0 auto;
  padding: 0;
  counter-reset: item;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  li {
    counter-increment: item;
    position: relative;
    padding-left: 2rem;
    list-style-type: none;

    &::before {
      position: absolute;
      left: 0;
      width: 1rem;
      top: f.fluid-length(-0.125, 0.125);
      text-align: right;
      content: counter(item);
      color: rgb(var(--color-tertiary));
      font-size: 1.5em;
      line-height: 1;
    }
  }
}
</style>
