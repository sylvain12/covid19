<style>
  .sidebar {
    grid-column: 1 / 2;
    grid-row: 1 / -1;
    background: linear-gradient(
      to bottom,
      rgb(23, 75, 118),
      rgba(45, 150, 236)
    );

    height: 100vh;
  }

  .sidebar__brand {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 2rem;
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
    /* border: 1px solid; */
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
</style>

<aside class="sidebar">
  <div class="sidebar__brand">
    <span>COVID19</span>
  </div>

  <ul class="sidebar__menu">

    <li class="sidebar__item">
      <span class="sidebar__link active">
        <i class="icofont-ui-home" />
        Dashborad
      </span>
    </li>
    <li class="sidebar__item">
      <span class="sidebar__link">
        <i class="icofont-table" />
        Resultats
      </span>
    </li>
    <li class="sidebar__item">
      <span class="sidebar__link">
        <i class="icofont-map" />
        Cartographie
      </span>
    </li>
    <li class="sidebar__item">
      <span class="sidebar__link">
        <i class="icofont-chart-line" />
        Graphique
      </span>
    </li>
  </ul>
</aside>
