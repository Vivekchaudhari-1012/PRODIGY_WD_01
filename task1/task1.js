window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var navLinks = document.getElementsByClassName('nav-item');

    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');

      for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.add('scrolled');
      }
    } else {
      navbar.classList.remove('scrolled');

      for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.remove('scrolled');
      }
    }
});