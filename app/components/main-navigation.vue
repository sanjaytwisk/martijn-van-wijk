<template>
  <nav class="nav">
    <div class="primary">
      <NuxtLink to="/" aria-label="Home">
        <img src="/logo.svg" alt="Logo" class="logo" height="44" width="44" />
      </NuxtLink>
      <ul class="list">
        <li>
          <NuxtLink to="tel:+31630103450">+31 6 30 10 34 50</NuxtLink>
        </li>
        <li>
          <NuxtLink to="mailto:info@klusbedrijfvanwijk.nl"
            >info@klusbedrijfvanwijk.nl</NuxtLink
          >
        </li>
      </ul>
    </div>
    <div class="secondary">
      <ul class="list">
        <li>
          <NuxtLink to="/#over-mij">Over mij</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/#werkwijze">Werkwijze</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/#projecten">Projecten</NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
<style scoped lang="scss">
@use '~/assets/css/fluid-length.scss' as f;

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: rgb(var(--color-primary));
  color: rgb(var(--color-white));
  padding: 1rem f.fluid-length(1.25, 1.5);
  position: relative;
}

.list {
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  gap: 1rem;
  padding: 0;
  margin: 0;

  a {
    color: inherit;
    text-decoration: none;
    font-size: f.fluid-length(1, 1.25);
  }

  @media (min-width: 600px) {
    flex-direction: row;
  }
}

.primary {
  @media (min-width: 600px) {
    display: flex;
    gap: 1rem;
  }
}

.primary .list {
  @media (max-width: 599px) {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    padding: 1rem;
    align-items: flex-start;
    gap: 0.5rem;
    background: rgb(var(--color-primary) / 0.2);
    backdrop-filter: blur(0.5rem);
  }
}

.secondary {
  display: none;

  @media (min-width: 900px) {
    display: block;
  }
}
</style>
