<script>
  // Import statements
  import Sidebar from "./components/layouts/Sidebar.svelte";
  import Navbar from "./components/layouts/Navbar.svelte";
  import Main from "./components/layouts/Main.svelte";
  import Footer from "./components/layouts/Footer.svelte";
  import Dashboard from "./components/pages/Dashboard.svelte";
  import Result from "./components/pages/Result.svelte";
  import Map from "./components/pages/Map.svelte";

  // Declared variables
  $: showedContent = {
    name: Dashboard
  };

  $: activeView = "dashboard";

  // Functions

  function handleShowDashboard(e) {
    let view = e.detail.target.innerText.toLowerCase();
    activeView = view;
    switch (view) {
      case "dashboard":
        showedContent.name = Dashboard;
        break;

      case "resultats":
        showedContent.name = Result;
        break;

      case "cartographie":
        showedContent.name = Map;
        break;

      default:
        break;
    }
  }
</script>

<style>

</style>

<div class="grid-wrapper">
  <Sidebar on:showview={handleShowDashboard} {activeView} />
  <Navbar />
  <Main>

    <svelte:component this={showedContent.name} />

  </Main>
  <Footer />
</div>
