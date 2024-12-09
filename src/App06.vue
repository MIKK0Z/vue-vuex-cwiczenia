<script>
    import MyCar from './components/MyCar.vue';
    export default {
        data() {
            return {
                title: "06: Cars",
            }
        },
        components: {
            MyCar,
        },
        computed: {
            cars() {
                return this.$store.state.cars;
            },
        },
        methods: {
            updateCar(id) {
                this.$store.commit("updateCar", id);
            },
            getStateColor(damaged) {
                return damaged ? "red" : "green";
            },
        }
    }
</script>

<template>
    <div>
        <h1>{{ title }}</h1>
        <h2>stan aut</h2>
        <template v-for="car in cars" :key="car.id">
            <div :style="{ backgroundColor: getStateColor(car.damaged) }">
                <p>{{ car.damaged ? "uszkodzony" : "nieuszkodzony" }}</p>
                <button @click="updateCar(car.id)">change</button>
            </div>
        </template>

        <h2>komponenty aut</h2>
        <template v-for="car in cars" :key="car.id">
            <MyCar :car="car"></MyCar>
        </template>
    </div>
</template>