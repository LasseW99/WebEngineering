function toggleTheme() {
    const body = document.body;
    const isDark = body.classList.toggle('dark-mode');
    const themeToggle = document.getElementById('theme-toggle');
  
    // Speichern des aktuellen Themas
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  
    // Icon aktualisieren
    themeToggle.textContent = isDark ? '☀️' : '🌙';
  }
  
  // Beim Laden das gespeicherte Theme und Icon anwenden
  window.addEventListener('DOMContentLoaded', function () {
    const savedTheme = localStorage.getItem('theme');
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');
  
    if (savedTheme === 'dark') {
      body.classList.add('dark-mode');
      themeToggle.textContent = '☀️'; // Sonne für Dunkelmodus
    } else {
      themeToggle.textContent = '🌙'; // Mond für Hellmodus
    }
  });

  // Dropdown functionality
  document.addEventListener('DOMContentLoaded', function () {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
      dropdown.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent the click from closing other dropdowns
        const dropdownContent = this.querySelector('.dropdown-content');
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
      });
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener('click', function(event) {
      dropdowns.forEach(dropdown => {
        const dropdownContent = dropdown.querySelector('.dropdown-content');
        if (dropdownContent.style.display === 'block' && !dropdown.contains(event.target)) {
          dropdownContent.style.display = 'none';
        }
      });
    });
  });

