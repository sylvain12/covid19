<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let covidinfobycontry = [];
  export let search = "";
  let i = 0;

  function filtred(e) {
    dispatch("filtred", e);
  }
</script>

<style>
  .table thead {
    color: #fff;
  }
  .table thead tr {
    font-size: 1rem;
  }

  .table-fixed {
    overflow-y: auto !important;
    height: 450px !important;
  }
  .table-fixed thead th {
    background: rgb(45, 150, 236);
    position: sticky !important;
    top: 0;
  }

  h1 {
    font-size: 2rem;
  }
</style>

<div class="row mb-4">
  <div class="col-md-6 col-sm-12">
    <h1 class="text-upper">Situation coronavirus dans le monde</h1>
  </div>
  <div class="col-md-6 col-sm-12 text-right">
    <input
      bind:value={search}
      on:input={filtred}
      type="text"
      placeholder="Entrer le nom du pays" />
  </div>
</div>

<div class="row table-fixed">

  <div class="card " style="width: 100%;">
    <table class="table table-striped">
      <thead>
        <tr>
          <!-- <th scope="col">#</th> -->
          <!-- <th scope="col">DATE</th> -->
          <th scope="col">PAYS</th>
          <th scope="col text-right">NOUVEAU CAS</th>
          <th scope="col text-right">TOTAL CAS</th>
          <th scope="col text-right">NOUVEAU DECES</th>
          <th scope="col text-right">TOTAL DECES</th>
          <th scope="col text-right">NOUVEAU GUERISON</th>
          <th scope="col text-right">TOTAL GUERISON</th>
        </tr>
      </thead>
      <tbody>
        {#each covidinfobycontry as covid}
          <tr>
            <!-- <th scope="row">{i + 1}</th> -->
            <!-- <td>{covid.Date}</td> -->
            <td class="text-left text-upper text-bold">
              <strong>{covid.Country}</strong>
            </td>
            <td class="text-right text-primary text-bold fs-big">
              {covid.NewConfirmed}
            </td>
            <td class="text-right text-warning text-bold fs-big">
              {covid.TotalConfirmed}
            </td>
            <td class="text-right text-primary text-bold fs-big">
              {covid.NewDeaths}
            </td>
            <td class="text-right text-danger text-bold fs-big">
              {covid.TotalDeaths}
            </td>
            <td class="text-right text-primary text-bold fs-big">
              {covid.NewRecovered}
            </td>
            <td class="text-right text-success text-bold fs-big">
              {covid.TotalRecovered}
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
