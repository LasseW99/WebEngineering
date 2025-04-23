function toggleTheme() {
    document.body.classList.toggle('dark-mode');
  
    const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
  }
  
  // Sayfa yüklendiğinde kaydedilmiş temayı uygula
  window.addEventListener('DOMContentLoaded', function () {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
    }
  });