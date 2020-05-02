<script>
  let currentDate = new Date().getFullYear();
</script>

<style>
  .footer {
    grid-column: 2 / -1;
    grid-row: 3 / 4;

    font-weight: 200;
  }

  .footer__detail {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .footer__detail a {
    text-decoration: underline;
  }
</style>

<footer class="footer">
  <div class="footer__detail container">
    <p>@{currentDate} coryright, Tous droits réservés</p>

    <p>
      COVID API Source:
      <a target="_blank" href="covid19api.com">covid19api.com</a>
    </p>
  </div>
</footer>
