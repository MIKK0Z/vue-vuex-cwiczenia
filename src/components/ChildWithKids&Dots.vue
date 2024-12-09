<script>
    import GrandchidrenWithDots from './GrandchidrenWithDots.vue';
    export default {
        methods: {
			increment() {
				this.$store.commit("incrementDots");
			},
			decrement() {
				this.$store.commit("decrementDots");
			},
		},
		computed: {
			count() {
				return this.$store.state.countDots;
			}
		},
        components: {
            GrandchidrenWithDots,
        },
    }
</script>

<template>
    <div class="comp">
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <p>{{ count }}</p>

        <template v-for="i in Math.floor(count / 2)" :key="i">
            <div class="dot"></div>
        </template>

        <GrandchidrenWithDots></GrandchidrenWithDots>
        <GrandchidrenWithDots></GrandchidrenWithDots>
    </div>
</template>

<style scoped>
    .comp {
        border: 1px dotted blue;
        padding: 1rem;

        & + & {
            margin-top: 1rem;
        }
    }

	.dot {
		width: 2rem;
		height: 2rem;
		background-color: blue;
		border-radius: 50%;
		display: inline-block;

		& + & {
			margin-left: .5rem;
		}
	}
</style>
