// vue-app.js
new Vue({
  el: '#aktuelles',
  data: {
    nachrichten: [
       'Aktuelle Bilder der letzten Sippung. ➜ <a href="Sippungen.html">Sippungen</a>',
        'Sippungen jeden Donnerstag 19:30 Uhr. ➜ <a href="ÜberUns.html">Infos</a>',
        'Eine schöne und gute <a href="Übersetzungen.html">Sommerung!</a>'
    ]
  }
});

new Vue({
  el: '#app',
  data: {
    bilder: [
      'BilderSippungen/IMG_3999-1920w.webp',
      'BilderSippungen/IMG_4001-1920w.webp',
      'BilderSippungen/IMG_4006-14b51234-1920w.webp',
      'BilderSippungen/IMG_4006-1920w.webp',
      'BilderSippungen/IMG_4006-14b51234-1920w.webp',
      'BilderSippungen/IMG_4006-1920w.webp',
      'BilderSippungen/IMG_4007-1920w.webp',
      'BilderSippungen/IMG_4010-1920w.webp',
      'BilderSippungen/IMG_4010-45651b4f-1920w.webp',
      'BilderSippungen/IMG_4014-1920w.webp',
      'BilderSippungen/IMG_4015-1920w.webp',
      'BilderSippungen/IMG_4016-1920w.webp',
      'BilderSippungen/IMG_4018-1920w.webp',
      'BilderSippungen/IMG_4020-1920w.webp',
      'BilderSippungen/IMG_4021-1920w.webp'

    ],
    index: 0
  },
  computed: {
    aktuellesBild() {
      return this.bilder[this.index];
    }
  },
  methods: {
    vor() {
      if (this.index < this.bilder.length - 1) {
        this.index++;
      } else {
        this.index = 0;
      }
    },
    zurueck() {
      if (this.index > 0) {
        this.index--;
      } else {
        this.index = this.bilder.length - 1;
      }
    }
  }
});
new Vue({
  el: '#app1',
  data: {
    bilder: [
      'BilderSippungen/IMG_3999-1920w.webp',
      'BilderSippungen/IMG_4001-1920w.webp',
      'BilderSippungen/IMG_4006-14b51234-1920w.webp',
      'BilderSippungen/IMG_4006-1920w.webp',
      'BilderSippungen/IMG_4006-14b51234-1920w.webp',
      'BilderSippungen/IMG_4006-1920w.webp',
      'BilderSippungen/IMG_4007-1920w.webp',
      'BilderSippungen/IMG_4010-1920w.webp',
      'BilderSippungen/IMG_4010-45651b4f-1920w.webp',
      'BilderSippungen/IMG_4014-1920w.webp',
      'BilderSippungen/IMG_4015-1920w.webp',
      'BilderSippungen/IMG_4016-1920w.webp',
      'BilderSippungen/IMG_4018-1920w.webp',
      'BilderSippungen/IMG_4020-1920w.webp',
      'BilderSippungen/IMG_4021-1920w.webp'

    ],
    index: 0
  },
  computed: {
    aktuellesBild() {
      return this.bilder[this.index];
    }
  },
  methods: {
    vor() {
      if (this.index < this.bilder.length - 1) {
        this.index++;
      } else {
        this.index = 0;
      }
    },
    zurueck() {
      if (this.index > 0) {
        this.index--;
      } else {
        this.index = this.bilder.length - 1;
      }
    }
  }
});
