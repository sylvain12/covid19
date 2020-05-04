<script>
  import { createEventDispatcher } from "svelte";

  let dispatch = createEventDispatcher();

  function showView(e) {
    dispatch("showview", e);
  }

  export let activeView = "dashboard";
  export let isToggled = true;
</script>

<style>
  .sidebar {
    grid-column: 1 / span 1;
    grid-row: 1 / -1;
    background: linear-gradient(to bottom, rgb(23, 75, 118), rgb(45, 150, 236));

    position: fixed;
    left: 0;
    top: 0;
    width: 150px;
    min-height: 100vh;
    transition: all 0.2s;
  }

  .sidebar__brand {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 1.5rem;
    padding: 1em 0;
  }

  .sidebar__menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .sidebar__item {
    width: 100%;
  }

  .sidebar__link {
    display: inline-block;
    padding: 1em;
    color: #fff;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    cursor: pointer;
    transition: all 0.26s;
  }

  .sidebar__link:hover {
    background: rgba(35, 59, 88, 0.2);
  }

  .sidebar__link.active {
    background: #233b58;
  }

  .sidebar__link i {
    font-size: 3.5rem;
    margin-bottom: 0.2em;
  }

  /* Media queries */
  @media (max-width: 576px) {
    .sidebar {
      top: 6rem;
      width: 100%;
      height: calc(100vh - 6rem);
      z-index: 99;
    }

    .sidebar.nav-mobile {
      transform: translateX(-100%);
    }

    .sidebar__link {
      display: flex !important;
      justify-content: space-between;
    }

    .sidebar__link i {
      font-size: 1.5rem;
    }
  }
</style>

<aside class="sidebar" class:nav-mobile={isToggled == true}>
  <div class="sidebar__brand">
    <span>INFOCOVID-19</span>
  </div>

  <ul class="sidebar__menu">

    <li class="sidebar__item">
      <div
        on:click={showView}
        class="sidebar__link"
        class:active={activeView == 'dashboard'}>
        <i class="icofont-ui-home" />
        Dashboard
      </div>
    </li>
    <li class="sidebar__item">
      <span
        on:click={showView}
        class="sidebar__link"
        class:active={activeView == 'resultats'}>
        <i class="icofont-table" />
        Resultats
      </span>
    </li>
    <!-- 
    <li class="sidebar__item">
      <span
        on:click={showView}
        class="sidebar__link"
        class:active={activeView == 'cartographie'}>
        <i class="icofont-map" />
        Cartographie
      </span>
    </li>
    <li class="sidebar__item">
      <span class="sidebar__link">
        <i class="icofont-chart-line" />
        Graphique
      </span>
    </li> -->
  </ul>
</aside>
