window.addEventListener('scroll', function() {
    const navigationMenu = document.querySelector('.navigation-menu');
    const sections = document.querySelectorAll('section');
    const currentSection = Array.from(sections).findIndex(
      (section) => section.getBoundingClientRect().top <= 0
    );
  
    if (currentSection >= 0) {
      navigationMenu.classList.add('scrolled');
    } else {
      navigationMenu.classList.remove('scrolled');
    }
  });
  
  const menuItems = document.querySelectorAll('.navigation-menu li a');
  menuItems.forEach(function(item) {
    item.addEventListener('mouseover', function() {
      item.style.color = '#ff9800';
    });
  
    item.addEventListener('mouseout', function() {
      item.style.color = '#fff';
    });
  });

  