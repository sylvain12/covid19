<script>
  let currentDate = new Date().getFullYear();
</script>

<style>
  .footer {
    grid-column: 2 / -1;
    grid-row: 3 / 4;
    font-weight: 200;
    font-size: 1.3rem;
  }

  .footer__detail {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .footer__detail a {
    text-decoration: underline;
  }

  /* Media queries */
  @media (max-width: 576px) {
    .footer {
      grid-column: 1 / -1;
    }

    .footer__detail {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
</style>

<footer class="footer">
  <div class="footer__detail container">
    <p>@{currentDate} coryright , Tous droits réservés</p>

    <p>

      <a target="_blank" href="https://web.facebook.com/Mshpci?_rdc=1&_rdr">
        Ministère de la Santé et de l'Hygiène Publique
      </a>
    </p>

    <p>
      COVID API Source:
      <a target="_blank" href="https://covid19api.com/">covid19api.com</a>
    </p>

    <p>
      Build with
      <i class="icofont-heart text-danger" />
      By
      <a target="_blank" href="https://github.com/sylvain12">
        Essentiel Digital
      </a>
      in
      <img
        src="/images/cote-d-ivoire-flag-round-icon-16.png"
        alt="Flag of Côte d'Ivoire" />
    </p>
  </div>
</footer>
