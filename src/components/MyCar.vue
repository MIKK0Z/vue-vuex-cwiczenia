<script>
    export default {
        props: ["car"],
        methods: {
            getStateColor(damaged) {
                return damaged ? "red" : "lime";
            },
            showData() {
                alert(JSON.stringify(this.car, 4, null));
            },
            updateCar(id) {
                this.$store.commit("updateCar", id);
            },
        },
    }
</script>

<template>
    <div class="car">
        <div :style="{ backgroundColor: car.hex_color }">
            kolor auta
        </div>
        <div :style="{ backgroundColor: getStateColor(car.damaged) }">
            {{ car.damaged ? "uszkodzony" : "sprawny" }}
        </div>
        <img :src="car.image" :alt="car.car_name">
        <p>id: {{ car.id }}</p>
        <p>name: {{ car.car_name }}</p>
        <p>year: {{ car.car_year }}</p>

        <button @click="showData">
            info
        </button>

        <button @click="updateCar(car.id)">
            change state
        </button>
    </div>
</template>

<style scoped>
    .car {
        display: inline-block;
        border: 1px blue dashed;
        padding: 1rem;
        margin: .5rem;

        & > div {
            padding: 0.5rem;
            text-align: center;
        }
    }
</style>