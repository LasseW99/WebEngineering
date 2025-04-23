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
  