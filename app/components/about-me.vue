<script setup>
import { CircleCheckBig } from 'lucide-vue-next';
</script>

<template>
  <section id="over-mij" class="about section">
    <h2 class="t-2 t-center">Over mij</h2>
    <div class="columns">
      <div class="info">
        <p class="t-body">
          Mijn naam is Martijn van Wijk. Sinds 2021 werk ik als zelfstandig
          timmerman en aannemer in Schiedam en omgeving. Ik verzorg timmerwerk,
          onderhoud en renovaties, van kleine klussen tot complete verbouwingen.
        </p>
        <p class="t-body">
          Klanten waarderen mijn werkwijze om de combinatie van vakmanschap,
          duidelijke communicatie en betrouwbare uitvoering. Wat begon met
          timmerwerk is inmiddels uitgegroeid tot een breed bouwbedrijf waar
          kwaliteit en zorg voor detail centraal staan.
        </p>
      </div>
      <ul class="activities t-body">
        <li>
          <div>
            <CircleCheckBig />
            <h3 class="t-body">Schilder- &amp; Stucwerk</h3>
          </div>
          <div>
            <p class="t-body-small">
              Voor de afwerking werk ik samen met vaste partners in schilder- en
              stucwerk. Zo heeft u één aanspreekpunt voor het hele project, van
              timmerwerk tot de laatste verflaag. Alle werkzaamheden worden op
              elkaar afgestemd, zodat het eindresultaat strak en duurzaam is.
            </p>
          </div>
        </li>
        <li>
          <div>
            <CircleCheckBig />
            <h3 class="t-body">Buitenwerk</h3>
          </div>
          <div>
            <p class="t-body-small">
              Ook buiten is goed vakmanschap belangrijk. Ik verzorg het
              aanleggen en onderhouden van houten terrassen, schuttingen,
              bergingen en overkappingen. Ik werk met weerbestendige materialen
              en zorg dat elk project er niet alleen mooi uitziet, maar ook
              jarenlang meegaat. Daarnaast kunt u ook voor gevelonderhoud bij
              mij terecht. Ik werk samen met vaste partners voor het
              gevelonderhoud.
            </p>
          </div>
        </li>
        <li>
          <div>
            <CircleCheckBig />
            <h3 class="t-body">Onderhoud &amp; Renovatie</h3>
          </div>
          <div>
            <p class="t-body-small">
              Kleine gebreken kunnen op termijn grote schade veroorzaken. Ik
              voer onderhoud en renovaties uit aan woningen, schuren en
              dakkapellen. Van houtrot en lekkages tot complete
              binnenrenovaties, alles wordt zorgvuldig uitgevoerd, met respect
              voor de bestaande constructie.
            </p>
          </div>
        </li>
        <li>
          <div>
            <CircleCheckBig />
            <h3 class="t-body">Extra service</h3>
          </div>
          <div>
            <p class="t-body-small">
              Heeft u een kleine klus of een spoedopdracht? Ook dan denk ik
              graag met u mee. Ik sta bekend om mijn duidelijke communicatie,
              nette werkwijze en betrouwbare planning.
            </p>
          </div>
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
  gap: f.fluid-length(1.5, 4);
  padding: f.fluid-length(4, 8) f.fluid-length(1, 4);
}

.columns {
  display: flex;
  flex-direction: column;
  gap: f.fluid-length(1.25, 4);
}

.info {
  max-width: 40rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: f.fluid-length(1, 2);
}

.activities {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  li {
    flex: 1 1 32rem;
    padding: f.fluid-length(1.25, 2.75);
    background-color: rgb(var(--color-secondary));
    border-radius: 0.75rem;
    display: flex;
    flex-direction: column;
    gap: f.fluid-length(0.5, 1);

    display: flex;
    align-items: start;
    gap: f.fluid-length(0.5, 0.75);

    > :first-child {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      flex-shrink: 0;
      margin-top: 0.125em;
    }
  }
}
</style>
