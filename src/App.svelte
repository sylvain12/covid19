<script>
  // Import statements
  import { onMount, onDestroy } from "svelte";
  import Sidebar from "./components/layouts/Sidebar.svelte";
  import Navbar from "./components/layouts/Navbar.svelte";
  import Main from "./components/layouts/Main.svelte";
  import Footer from "./components/layouts/Footer.svelte";
  import Dashboard from "./components/pages/Dashboard.svelte";
  import Result from "./components/pages/Result.svelte";
  import Map from "./components/pages/Map.svelte";
  import Loader from "./components/shared/Loader.svelte";
  import axios from "axios";

  // stores call

  import { covidGlobal, covidCI } from "./data/covid19-global-store.js";

  // Declared variables
  const uriGlobal = "https://api.covid19api.com/summary";
  const uriCI = "https://api.covid19api.com/total/country/ivory-coast";
  let showedContent = { name: Dashboard };
  let activeView = "dashboard";
  let isCompleted = false;

  $: filtredData = $covidGlobal.Countries;
  let toggleNav = true;

  $: search = "";

  if (!localStorage.getItem("view")) {
    localStorage.setItem("view", "dashboard");
  } else {
    const view = localStorage.getItem("view");
    if (view == "dashboard") {
      showedContent.name = Dashboard;
      activeView = "dashboard";
    } else if (view == "resultats") {
      showedContent.name = Result;
      activeView = "resultats";
    } else if (view == "cartographie") {
      showedContent.name = Map;
      activeView = "cartographie";
    }
  }

  // Functions
  onMount(async () => {
    const covidinfo = await axios.get(uriGlobal);
    const resCI = await axios.get(uriCI);

    if (covidinfo.status == 200) {
      $covidGlobal = covidinfo.data;
    } else {
      throw new Error(resGlobal.statusText);
    }

    if (resCI.status == 200) {
      $covidCI = resCI.data[resCI.data.length - 1];
    } else {
      throw new Error(resCI.statusText);
    }

    return () => console.log("Destroy");
  });

  onDestroy(() => {
    localStorage.removeItem("view");
    console.log(localStorage.getItem("view"));
  });

  function handleFiltred(e) {
    console.log(search);
    if (e.detail.target.value == "") {
      filtredData = $covidGlobal.Countries;
    } else {
      filtredData = $covidGlobal.Countries.filter(element => {
        return element.Country.toLowerCase().includes(
          e.detail.target.value.toLowerCase()
        );
      });
    }
  }

  function handleToggleNav() {
    toggleNav = !toggleNav;
  }

  function handleShowDashboard(e) {
    let view = e.detail.target.innerText.toLowerCase();
    const asideParent =
      e.detail.target.parentElement.parentElement.parentElement;
    if (!asideParent.classList.contains("nav-mobile")) {
      asideParent.classList.add("nav-mobile");
      toggleNav = true;
    }

    activeView = view;
    switch (view) {
      case "dashboard":
        showedContent.name = Dashboard;
        localStorage.setItem("view", "dashboard");
        break;

      case "resultats":
        showedContent.name = Result;
        localStorage.setItem("view", "resultats");
        break;

      case "cartographie":
        showedContent.name = Map;
        localStorage.setItem("view", "cartographie");
        break;

      default:
        break;
    }
  }
</script>

<style>
  /* #map {
    height: 100%;
  } */
</style>

<div class="grid-wrapper">
  <Sidebar
    isToggled={toggleNav}
    on:showview={handleShowDashboard}
    {activeView} />
  <Navbar on:toggleNav={handleToggleNav} />
  <Main>

    {#if !isCompleted}
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <i class="icofont-warning" />
        <strong>Attention!</strong>
        La plateforme est en développement, les données ou l'interface pourront
        à tout moment évoluer.
      </div>
    {/if}

    {#if $covidGlobal === {}}
      <Loader />
    {:else}
      <svelte:component
        this={showedContent.name}
        covidCI={$covidCI}
        covidGlobal={$covidGlobal.Global}
        covidinfobycontry={filtredData}
        bind:search
        on:filtred={handleFiltred} />
    {/if}

  </Main>
  <Footer />
</div>
