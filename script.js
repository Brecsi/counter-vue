const { createApp } = Vue;


createApp({
    data: {
        counter: 0
    },
    methods: {
        increment: function () {
            this.counter++;
        },
        countForward: function () {
            setInterval(() => {
                this.increment();
            }, 1000);
        },
        countBackward: function () {
            setInterval(() => {
                this.counter--;
            }, 1000);
        }
    }

});