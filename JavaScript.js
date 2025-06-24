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

   const translations = {
      de: {
        title: "Schlaraffia Lexikon",
        subtitle: "Begriffe & Erklärungen",
        search: "Begriff suchen...",
        term1_title: "Schlaraffia",
        term1_desc: "Ein Männerbund mit Humor, Kunst, Freundschaft und eigenen Ritualen.",
        term2_title: "Reych",
        term2_desc: "Die Bezeichnung für eine lokale Gruppe innerhalb der Schlaraffia.",
        term3_title: "Sippung",
        term3_desc: "Zeremonielles Treffen der Schlaraffen mit festen Regeln und Beiträgen.",
        term4_title: "Oberschlaraffe",
        term4_desc: "Ein Führungsamt innerhalb des Reychs.",
        term5_title: "Allschlaraffia",
        term5_desc: "Die weltweite Gemeinschaft aller Schlaraffen-Reyche.",
        term6_title: "Uhu",
        term6_desc: "Wappentier der Schlaraffia, steht für Weisheit.",
        term7_title: "Junker",
        term7_desc: "Ein Mitglied auf dem Weg zum Ritter.",
        term8_title: "Burg",
        term8_desc: "Der Versammlungsort der Schlaraffen.",
        term9_title: "Fechsung",
        term9_desc: "Ein künstlerischer oder literarischer Beitrag während der Sippung.",
        term10_title: "Ritterspiel",
        term10_desc: "Eine besondere Veranstaltung zur Aufnahme oder Ehrung von Mitgliedern.",
        term11_title: "Sommerung",
        term11_desc: "Sommerzeit"
      },
      en: {
        title: "Schlaraffia Encyclopedia",
        subtitle: "Terms & Explanations",
        search: "Search for a term...",
        term1_title: "Schlaraffia",
        term1_desc: "A brotherhood based on humor, art, friendship, and unique rituals.",
        term2_title: "Reych",
        term2_desc: "The name for a local group within Schlaraffia.",
        term3_title: "Sippung",
        term3_desc: "Ceremonial gathering with rules and artistic contributions.",
        term4_title: "Oberschlaraffe",
        term4_desc: "A leadership role within the Reych.",
        term5_title: "Allschlaraffia",
        term5_desc: "The worldwide community of all Schlaraffia groups.",
        term6_title: "Uhu",
        term6_desc: "The heraldic animal of Schlaraffia, symbolizing wisdom.",
        term7_title: "Junker",
        term7_desc: "A member on the way to becoming a knight.",
        term8_title: "Burg",
        term8_desc: "The meeting place of the Schlaraffia.",
        term9_title: "Fechsung",
        term9_desc: "An artistic or literary contribution during a gathering.",
        term10_title: "Ritterspiel",
        term10_desc: "A special event for admission or honoring members."
      },
      ar: {
        title: "قاموس شلارافيا",
        subtitle: "مصطلحات وشروحات",
        search: "ابحث عن مصطلح...",
        term1_title: "شلارافيا",
        term1_desc: "رابطة للرجال  تقوم على الفكاهة والفن والصداقة وطقوس خاصة.",
        term2_title: "ريش",
        term2_desc: "اسم للمجموعة المحلية داخل شلارافيا.",
        term3_title: "سيبونغ",
        term3_desc: "لقاء احتفالي بقواعد ومساهمات فنية.",
        term4_title: "أوبرشلارافه",
        term4_desc: "منصب قيادي داخل الريش.",
        term5_title: "الشلارافيا العالمية",
        term5_desc: "المجتمع العالمي لجميع مجموعات شلارافيا.",
        term6_title: "أوهُو",
        term6_desc: "الطائر الرمزي لشلارافيا ويمثل الحكمة.",
        term7_title: "يونكر",
        term7_desc: "عضو في طريقه ليصبح فارسًا.",
        term8_title: "القلعة",
        term8_desc: "مكان اجتماع أعضاء شلارافيا.",
        term9_title: "فيخسونغ",
        term9_desc: "مساهمة فنية أو أدبية خلال اللقاء.",
        term10_title: "لعبة الفارس",
        term10_desc: "فعالية خاصة للترقية أو تكريم الأعضاء."
      }
    };

    const selector = document.getElementById("language-selector");
    const searchInput = document.getElementById("search");

    selector.addEventListener("change", () => {
      const lang = selector.value;
      document.body.setAttribute("lang", lang);

      const keys = document.querySelectorAll("[data-key]");
      keys.forEach(el => {
        const key = el.getAttribute("data-key");
        if (translations[lang][key.replace("-", "_")]) {
          el.textContent = translations[lang][key.replace("-", "_")];
        }
      });

      searchInput.placeholder = translations[lang].search;
    });

    function filterTerms() {
      const filter = searchInput.value.toLowerCase();
      const terms = document.querySelectorAll(".term");

      terms.forEach(term => {
        const title = term.querySelector("h2").textContent.toLowerCase();
        term.style.display = title.includes(filter) ? "" : "none";
      });
    }