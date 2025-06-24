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
      'Bilder3179/IMG_4027-1920w.webp',
      'Bilder3179/IMG_4029-1920w.webp',
      'Bilder3179/IMG_4030-1920w.webp',
      'Bilder3179/IMG_4032-1920w.webp',
      'Bilder3179/IMG_4033-1920w.webp',
      'Bilder3179/IMG_4035-1920w.webp',
      'Bilder3179/IMG_4036-1920w.webp',
      'Bilder3179/IMG_4038-1920w.webp',
      'Bilder3179/IMG_4042-1920w.webp',
      'Bilder3179/IMG_4044-1920w.webp',
      'Bilder3179/IMG_4046-1920w.webp',
      'Bilder3179/IMG_4047-1920w.webp',
      'Bilder3179/IMG_4048-1920w.webp',
      'Bilder3179/IMG_4050-1920w.webp',
      'Bilder3179/IMG_4051-1920w.webp',
      'Bilder3179/IMG_4052-1920w.webp'

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
  el: '#app2',
  data: {
    bilder: [
      'Bilder3184/IMG_4269-1920w.webp',
      'Bilder3184/IMG_4270-1920w.webp',
      'Bilder3184/IMG_4271-1920w.webp',
      'Bilder3184/IMG_4274-1920w.webp',
      'Bilder3184/IMG_4275-1920w.webp',
      'Bilder3184/IMG_4277-1920w.webp',
      'Bilder3184/IMG_4280-1920w.webp',
      'Bilder3184/IMG_4282-1920w.webp',
      'Bilder3184/IMG_4284-1920w.webp',
      'Bilder3184/IMG_4287-1920w.webp',
      'Bilder3184/IMG_4289-1920w.webp',
      'Bilder3184/IMG_4292-6daf161f-1920w.webp',
      'Bilder3184/IMG_4295-1920w.webp',
      'Bilder3184/IMG_4296-1920w.webp'

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
  el: '#app3',
  data: {
    bilder: [
     'Bilder3185/IMG_4317-1920w.webp',
     'Bilder3185/IMG_4318-1920w.webp',
     'Bilder3185/IMG_4321-1920w.webp',
     'Bilder3185/IMG_4323-1920w.webp',
     'Bilder3185/IMG_4324-1920w.webp',
     'Bilder3185/IMG_4325-1920w.webp',
     'Bilder3185/IMG_4328-1920w.webp',
     'Bilder3185/IMG_4329-1920w.webp',
     'Bilder3185/IMG_4330-1920w.webp',
     'Bilder3185/IMG_4337-1920w.webp',
     'Bilder3185/IMG_4339-1920w.webp',
     'Bilder3185/IMG_4341-1920w.webp',
     'Bilder3185/IMG_4342-1920w.webp',
     'Bilder3185/IMG_4343-1920w.webp'

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
