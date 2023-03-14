new Vue({
    el: '#app',
    data: {
      count: 0,
      direction: 1,
    },
    methods: {
      increment: function() {
        this.count += this.direction;
      },
      toggleDirection: function() {
        this.direction *= -1;
      },
    },
    computed: {
      incrementButtonText: function() {
        return this.direction > 0 ? 'Hozzáad' : 'Elvesz';
      },
      directionButtonText: function() {
        return this.direction > 0 ? 'Előre' : 'Hátra';
      },
    },
  });