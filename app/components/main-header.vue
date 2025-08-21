<template>
  <header class="header">
    <div class="nav">
      <MainNavigation />
    </div>
    <div class="content">
      <slot />
    </div>
  </header>
</template>

<style scoped lang="scss">
@use '~/assets/css/fluid-length.scss' as f;
.header {
  width: 100vw;
  height: min(150vw, 100vh);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  background-image:
    linear-gradient(15deg, rgb(var(--color-primary) / 0.4) 0%, transparent 50%),
    url('/header.jpg');
  background-size: 240%;
  background-position: center;
  background-repeat: no-repeat;
  padding: f.fluid-length(1, 2);
  color: rgb(var(--color-white));

  @media (min-width: 600px) {
    background-size: cover;
  }
}
</style>
