<template>
    <div>
        <slot :min="min" :sec="sec"></slot>
    </div>
</template>

<script>
export default {
    data() {
        return {
            min: 2,
            sec: 0,
            reset: {
                min: 2,
                sec: 0,
            },
        };
    },
    methods: {
        resetTimer() {
            const { min, sec } = this.reset;
            this.min = min;
            this.sec = sec;
            this.startTimer();
        },
        startTimer() {
            if (this.min == 0 && this.sec == 0) return this.$emit("timerEnd");
            if (this.sec > 0) this.sec--;
            else if (this.min > 0) {
                this.min--;
                this.sec = 59;
            }
            return setTimeout(() => {
                this.startTimer();
            }, 1000);
        },
    },
    created() {
        this.startTimer();
    },
};
</script>
