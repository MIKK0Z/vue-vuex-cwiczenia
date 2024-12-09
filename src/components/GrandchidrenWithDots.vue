<script>
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
		}
    }
</script>

<template>
    <div class="compb">
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <p>{{ count }}</p>

        <template v-for="i in Math.floor(count / 4)" :key="i">
            <div class="dot"></div>
        </template>
    </div>
</template>

<style scoped>
    .compb {
        border: 1px dotted cyan;
        padding: 1rem;

        & + & {
            margin-top: 1rem;
        }
    }

	.dot {
		width: 2rem;
		height: 2rem;
		background-color: cyan;
		border-radius: 50%;
		display: inline-block;

		& + & {
			margin-left: .5rem;
		}
	}
</style>