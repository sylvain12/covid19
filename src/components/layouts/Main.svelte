<style>
  .main-content {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    padding: 2em 0;
  }

  /* Media queries */
  @media (max-width: 576px) {
    .main-content {
      grid-column: 1 / -1;
    }
  }
</style>

<main class="main-content">
  <div class="container">
    <slot />
  </div>
</main>
