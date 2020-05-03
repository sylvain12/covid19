<script>
  import mapboxgl from "mapbox-gl";

  mapboxgl.accessToken =
    "pk.eyJ1Ijoic3lsdmFpbjEyIiwiYSI6ImNrOXI3emV2NTBybnozaW4xM291YWR3cGwifQ.LKw2bZFCf1Xq57pT7zaSOQ";
  var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11"
  });
</script>
