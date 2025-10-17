<template>
  <footer class="footer">
    <div class="info">
      <p>
        Bouw- en Timmerbedrijf Martijn van Wijk <br />
        van Smaleveltstraat 25 <br />
        3117 CE Schiedam
      </p>
      <p>
        kvk: 77424816 <br />
        btw: NL003193022B95
      </p>
    </div>
    <ul class="links">
      <li>
        <a href="/documenten/algemene-voorwaarden.pdf" target="_blank"
          >Algemene voorwaarde</a
        >
      </li>
      <li>
        <a href="/documenten/privacyverklaring.pdf" target="_blank"
          >Privacy verklaring</a
        >
      </li>
    </ul>
  </footer>
</template>

<style scoped lang="scss">
@use '~/assets/css/fluid-length.scss' as f;
.footer {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: rgb(var(--color-primary));
  background-color: rgb(var(--color-secondary));
  padding: f.fluid-length(1.25, 2.5);

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
  }
}

.info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 0.5rem;

  a {
    color: rgb(var(--color-primary));
    &:hover {
      color: rgb(var(--color-tertiary));
    }
  }
}
</style>
