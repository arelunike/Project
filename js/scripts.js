    <script>
      document.querySelector('.menu-icon').addEventListener('click', function () {
        this.classList.toggle('active'); // Ajoute ou retire la classe active
      
          <script>
  const menuIcon = document.querySelector('.menu-icon');
  const navbarCollapse = document.querySelector('#navbarCollapse');

  // Gestion du clic sur l'icône du menu
  menuIcon.addEventListener('click', function (event) {
    this.classList.toggle('active');
  });

  // Fermer le menu quand on clique à l'extérieur
  document.addEventListener('click', function (event) {
    const isClickInsideMenu = navbarCollapse.contains(event.target);
    const isClickOnMenuIcon = menuIcon.contains(event.target);

    // Si le clic n'est ni sur l'icône ni dans le menu, on le ferme
    if (!isClickInsideMenu && !isClickOnMenuIcon) {
      navbarCollapse.classList.remove('show'); // Ferme le menu
      menuIcon.classList.remove('active');    // Réinitialise l'icône
    }
  });
</script>
      });
    </script>