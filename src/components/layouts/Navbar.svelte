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
  }

  .nav__info {
    display: flex;
    align-items: center;
  }

  .nav__info-list {
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
  }

  .nav__info-title {
    margin-right: 0.5em;
    font-size: 3rem;
  }
</style>

<nav class="nav">
  <div class="nav__menu container">
    <div class="nav__info">
      <h3 class="nav__info-title">
        COTE D'IVOIRE
        <span>:</span>
      </h3>

      <ul class="nav__info-list">
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

      </ul>
    </div>
  </div>
</nav>
