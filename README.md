Hallo# WebEngineering
Flensburgia – Offizielle Website
Willkommen im Reych der Schlaraffia Flensburgia. Diese Website präsentiert die Philosophie, Aktivitäten und den Geist der Schlaraffen in einem modernen, responsiven Webdesign.

Projektübersicht
Diese Website besteht aus:

HTML (strukturierte Inhalte)

CSS (Design & Layout)

JavaScript (Dark Mode, Navigation)

Vue.js (Dynamische Anzeige von Nachrichten, Slideshows)

 Funktionalitäten
🌙 Dark Mode umschaltbar über Button

🧭 Navigationsmenü mit Dropdowns

🔁 Slideshow via Vue.js mit Bildern aus Ordner

🔗 Interne Anker-Links zu bestimmten Sektionen (z. B. #wasistschlarrafia)

📄 Separate Unterseiten für verschiedene Themenbereiche

Technologien
HTML5

CSS3 + Font Awesome (Icons)

JavaScript

Vue.js 2 (CDN eingebunden)

 Git & Deployment
Falls du das Projekt clonen möchtest:

bash
Kopieren
Bearbeiten
git clone https://github.com/LasseW99/WebEngineering.git
cd WebEngineering


Website.html

Die Startseite bildet den zentralen Einstiegspunkt zur Webpräsenz der Schlaraffia Flensburgia. Sie vermittelt den ersten Eindruck über das Reych, seine Werte und bietet direkte Verlinkungen zu den wichtigsten Informationsbereichen.

🔧 Seitenstruktur und Inhalte
Header mit Navigation:
Enthält ein responsives Menü mit Dropdown-Funktionalität für alle Unterseiten. Die Dark-/Lightmode-Umschaltung erfolgt über einen Button.

Hero-Sektion:
Ein einladender Willkommensbereich mit Titel, Mission ("Ort an dem Werte noch ein Wert haben") und einem Call-to-Action-Button („Mehr erfahren“), der auf die Seite DieSchlaraffen.html verweist.

Icon-Button-Bereich:
Vier große, klickbare Schaltflächen verlinken auf:

Schlaraffen-Standorte weltweit

YouTube-Video über Schlaraffen

Interne Seite „Über uns“ (Button aber ohne Link → Verbesserung möglich)

Kontaktseite

Aktuelles-Sektion (Vue):
Eine dynamische Sektion mit aktuellen Nachrichten, geladen über Vue.js und die nachrichten-Datenquelle.

Footer:
Rechtliche Informationen, Adressdaten und Link zur Datenschutzerklärung.

ÜberUns.html – Flensburgia Website
Diese Seite ist Teil der offiziellen Webpräsenz der Schlaraffia Flensburgia. Sie stellt zentrale Informationen über den Verein, seine Ziele und den Kontakt bereit.
und Sie stellt die Gemeinschaft, ihre Geschichte und die Prinzipien der Schlaraffenwelt vor.  
Besondere Abschnitte sind den Mitgliedern (Sassen), den Statuten sowie dem Windjammer-Orden gewidmet.  
Die Webseite bietet zusätzlich hilfreiche Links für Interessierte und Besucher aus dem hohen Norden.  
Das Design wurde mit HTML und CSS umgesetzt und ist mobilfreundlich gestaltet.

Seiteninhalte
Die Seite besteht aus mehreren strukturierten Sektionen:

Header mit Navigation
Intuitive Navigation mit Dropdown-Menüs zu allen Unterseiten.

Einführung: „Was ist Flensburgia?“
Textlich aufbereitete Einführung in die Werte und Geschichte der Schlaraffia.

Info-Karten (Links):
Verlinkungen zu:

Allschlaraffia

Schlaraffia im Norden

Kontaktinformationen:
Persönlicher Kontakt zu Vorständen / Verantwortlichen mit Telefonnummer und E-Mail-Adressen.

Vereinsdetails (Herausgeber & Betreiber):
Rechtliche Informationen inkl. Adresse, Registergericht, Vereinsleitung, Netzvogt.


Sippungen.html

Die Seite nutzt Vue.js zur Darstellung einer benutzerfreundlichen Slideshow, was eine moderne und interaktive Galerie ermöglicht. Das Design ist klar und auf Mobilgeräte angepasst, jedoch könnte die optische Trennung zwischen den Slideshows noch durch ein leichtes Box-Design verbessert werden. Eine zusätzliche Überschrift oder Filtermöglichkeit nach Datum oder Thema würde die Navigation erleichtern. Auch das Laden der Bilder könnte optimiert werden (Lazy Loading). Insgesamt bietet die Seite einen gelungenen visuellen Einblick in das Vereinsleben.

Diese Seite präsentiert die Bilder und Eindrücke vergangener Sippungen der Schlaraffia Flensburgia. Sie bietet Besuchern visuelle Eindrücke von besonderen Veranstaltungen, Ehrungen und geselligen Zusammenkünften.

🔧 Seitenstruktur und Inhalte
Header mit Navigation:
Responsive Navigationsleiste mit Dropdown-Menüs zu allen Unterseiten (Willekum, Die Schlaraffen, Über uns, Übersetzungen, Kontakt).

Einleitender Abschnitt:
Kurzer Titel „Bilder unserer Sippungen“ führt direkt zur Galerie.

Bild-Slideshows mit Vue.js:
Es werden vier Slideshows dargestellt (für verschiedene Sippungen: Nr. 3178, 3179, 3184, 3185), die mithilfe von Vue.js und Buttons gesteuert werden können (vor/zurück).

Begleittexte zu Bildern:
Jede Slideshow enthält eine Beschreibung der jeweiligen Sippung, z. B. mit Details zu Orden, Gästen oder besonderen Themen (Musik, Wahlschlaraffiade usw.).

Abschluss mit Footer:
Der Footer zeigt die Vereinsadresse und verlinkt zur Datenschutzerklärung.



Übersetzungen.html

Diese Unterseite dient als mehrsprachiges Glossar, das zentrale Begriffe aus der Welt der Schlaraffia für ein breiteres Publikum (Deutsch, Englisch, Arabisch) zugänglich macht. Ziel ist es, neue Interessierte – besonders internationale Besucher – besser zu informieren und einzubinden.

Seitenstruktur und Funktionen
Header mit Navigation:
Konsistent mit der Startseite: Navigation, Darkmode-Schalter und Dropdown-Menüs. Aktive Seite „Übersetzungen“ ist visuell hervorgehoben (class="active").

Sprachwahl (Dropdown):
#language-selector erlaubt Umschaltung zwischen Deutsch, Englisch und Arabisch. (Übersetzungslogik vermutlich in JavaScript.js eingebunden – z. B. via data-key-Attribut.)

Suchfeld:
Das Eingabefeld mit onkeyup="filterTerms()" filtert die Begriffe dynamisch. (Wird per JavaScript realisiert.)

 Begriffslexikon:
Jede Begriffserklärung (z. B. Schlaraffia, Reych, Sippung, Fechsung...) ist in einem div.term enthalten, mit:

data-key-Attributen → Grundlage für Mehrsprachigkeit.

Footer:
Rechtliches und Link zur Datenschutzerklärung.

Kontakt.html

Diese Seite soll Besuchern zeigen, wie sie mit der Flensburgia Kontakt aufnehmen können und wer welche Funktionen innehat.

Seitenaufbau:
Header:
Navigationsmenü mit einem Button zum Umschalten des Dunkel-/Hellmodus (toggleTheme() Funktion).

Aktive Seite ist „Kontakt“ (class="active").

 Kontaktbereich (section#section1):
Zwei Ansprechpartner (Frank Jähnig & Peter Gregersen) mit Telefon und E-Mail (mailto:).

Direkte Kontaktinformationen für Besucher.

🏛️ Offizielle Angaben (section#section2):
Vereinsname, Adresse und Vertretungsberechtigte sind angegeben.

Netzvogt (Webverantwortlicher) mit Kontaktmail.

Wichtig für rechtliche Transparenz und Vertrauen.