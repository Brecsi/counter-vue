const { createApp } = Vue;

createApp({
  data() {
    return {
      counter: 0,
      min: 0,
      max: 10
    };
  },
  methods: {
    increment() {
      if (this.counter < this.max) {
        this.counter++;
      }
    },
    decrement() {
      if (this.counter > this.min) {
        this.counter--;
      }
    }
  }
}).mount("#app");