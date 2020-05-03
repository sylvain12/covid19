<script>
  import { onMount } from "svelte";

  export let covidGlobal = {
    TotalConfirmed: 0,
    TotalRecovered: 0,
    TotalDeaths: 0
  };

  export let covidCI = {
    Country: "Côte d'Ivoire",
    CountryCode: "",
    Province: "",
    City: "",
    CityCode: "",
    Lat: "0",
    Lon: "0",
    Confirmed: 1333,
    Deaths: 15,
    Recovered: 597,
    Active: 0,
    Date: "2020-05-01T00:00:00Z"
  };
</script>

<style>
  .card-covid .card-body h5 {
    font-size: 1.8rem;
    font-weight: 300;
    text-transform: uppercase;
  }

  .card-covid .card-body {
    display: flex;
    flex-direction: column;
  }

  .card-covid .card-body .card-text {
    display: flex;
    justify-content: space-between;
  }

  .card-covid .card-body i {
    font-size: 5rem;
    margin-right: 0.15em;
  }

  .card-covid .card-body span {
    font-size: 3rem;
  }

  section {
    margin-bottom: 3em;
  }
</style>

<section class="section-gl">
  <!-- Global Data -->
  <div class="row">
    <div class="col-12">
      <h2 class="text-upper">Donnees global sur le covid-19</h2>
      <hr />
    </div>
  </div>

  <div class="row mb-4">
    <div class="col-md-4 col-sm-12">
      <div class="card card-covid">
        <div class="card-body">
          <h5 class="card-title">Personnes infectées</h5>
          <div class="card-text">
            <i class="icon-sad icofont-sad" />
            <span>{covidGlobal.TotalConfirmed}</span>
          </div>

        </div>
      </div>
    </div>
    <div class="col-md-4 col-sm-12">
      <div class="card card-covid">
        <div class="card-body">
          <h5 class="card-title">Personnes guéries</h5>
          <div class="card-text">
            <i class="icon-happy icofont-laughing" />
            <span>{covidGlobal.TotalRecovered}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 col-sm-12">
      <div class="card card-covid">
        <div class="card-body">
          <h5 class="card-title">Personnes décédées</h5>
          <div class="card-text">
            <i class="icon-cry icofont-crying" />
            <span>{covidGlobal.TotalDeaths}</span>
          </div>
        </div>
      </div>
    </div>
  </div>

</section>

<!-- Cote d'Ivoire data -->

<section class="section-ci">
  <div class="row">
    <div class="col-12">
      <h2 class="text-upper">Données Côte d'Ivoire</h2>
      <hr />
    </div>
  </div>

  <div class="row">
    <div class="col-md-4 col-sm-12">
      <div class="card card-covid">
        <div class="card-body">
          <h5 class="card-title">Personnes infectées</h5>
          <div class="card-text">
            <i class="icon-sad icofont-sad" />
            <span>{covidCI.Confirmed}</span>
          </div>

        </div>
      </div>
    </div>
    <div class="col-md-4 col-sm-12">
      <div class="card card-covid">
        <div class="card-body">
          <h5 class="card-title">Personnes guéries</h5>
          <div class="card-text">
            <i class="icon-happy icofont-laughing" />
            <span>{covidCI.Recovered}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 col-sm-12">
      <div class="card card-covid">
        <div class="card-body">
          <h5 class="card-title">Personnes décédées</h5>
          <div class="card-text">
            <i class="icon-cry icofont-crying" />
            <span>{covidCI.Deaths}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
