import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App06.vue";
import Cars from "./data/cars.json";

const store = createStore({
    state: {
        count: 0,
        countDots: 0,
        cars: Cars,
    },
    mutations: {
        increment(state) {
            state.count += 1;
        },
        decrement(state) {
            state.count -= 1;
        },

        incrementDots(state) {
            state.countDots += 1;
        },
        decrementDots(state) {
            if (state.countDots === 0) {
                alert("min 0");
                return
            }

            state.countDots -= 1;
        },
        updateCar(state, id) {
            const car = state.cars.find((car) => car.id === id)
            car.damaged = !car.damaged;
        }
    }
})

createApp(App).use(store).mount("#app");
