<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  function toggleNav() {
    dispatch("toggleNav");
  }
</script>

<style>
  .nav {
    grid-column: 2 / -1;
    grid-row: 1 / 2;
    background: #fff;
    box-shadow: 0rem 0.5rem 0.8rem rgba(0, 0, 0, 0.05);
  }

  .nav__menu {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  }

  .nav__info {
    display: flex;
    align-items: center;
    width: 100%;
  }

  /* .nav__info-list {
    display: flex;
    align-items: center;
  }

  .nav__info-item.happy i {
    color: #289f0b;
  }

  .nav__info-item {
    font-size: 3rem;
    padding: 0 1em;
  }

  .nav__info-item:not(:last-child) {
    border-right: 2px solid #f4f4f4;
  }

  .nav__info-item i {
    margin-right: 0.5rem;
  }

  .nav__info-item.cry i {
    color: #b51818;
  }

  .nav__info-item.sad i {
    color: #d3af36;
  } */

  .nav__info-title {
    margin-right: 0.5em;
    font-size: 1.5rem;
    flex: 1;
    line-height: 1.7;
    text-align: center;
  }

  .mr-2 {
    display: inline-block;
    margin-right: 4em;
  }

  .menu-humberger {
    display: inline-block;
    background: transparent;
    border: none;
    font-size: 4rem;
    cursor: pointer;
    outline: none;
    transform: scale(1);
    transition: transform 0.2s ease-in-out;
  }

  .menu-humberger:hover {
    transform: scale(1.1);
  }

  .nav__mobile {
    justify-content: space-between;
    align-items: center;
    width: 100%;
    display: none;
  }

  /* Media queries */
  @media (max-width: 576px) {
    .nav {
      grid-column: 1 / -1;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 99;
      width: 100%;
    }
    .nav__info {
      display: none;
    }

    .container {
      width: 100%;
      max-width: 100%;
    }

    .nav__menu {
      justify-content: space-between;
    }
    .nav__mobile {
      display: flex;
    }
  }
</style>

<nav class="nav">
  <div class="nav__menu container">

    <div class="nav__mobile">
      <button class="menu-humberger" on:click={toggleNav}>
        <i class="icofont-navigation-menu" />
      </button>
      <p>INFOCOVID-19</p>
    </div>

    <div class="nav__info">
      <h3 class="nav__info-title">
        Ensemble contre le coronavirus
        <span>:</span>
        <span class="mr-2">
          <i class="icofont-mobile-phone text-primary" />
          143 / 101 /125 / 119
        </span>

        <span class="mr-2">
          <i class="icofont-ui-message text-primary" />
          SMS: evonyer coronavirus au 1366
        </span>

        <span class="mr-2">
          <i class="icofont-ui-dial-phone text-primary" />
          20250040 / 20221633 / 03799144
        </span>

        <span class="mr-2">
          <i class="icofont-world text-primary" />
          <a target="_blank" href="http://info-covid19.gouv.ci/">
            info-covid19.gouv.ci
          </a>
        </span>

      </h3>

      <!-- <ul class="nav__info-list">
        <li class="nav__info-item sad">
          <i class="icofont-sad" />
          <span class="nav__info-text">1333</span>
        </li>
        <li class="nav__info-item happy">
          <i class="icofont-laughing" />
          <span class="nav__info-text">527</span>
        </li>

        <li class="nav__info-item cry">
          <i class="icofont-crying" />
          <span class="nav__info-text">15</span>
        </li>

      </ul> -->
    </div>
  </div>
</nav>
