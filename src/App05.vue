<script>
	import ChildWithKidsDots from './components/ChildWithKids&Dots.vue';

	export default {
		data() {
			return {
				title: "05: parent -> child -> grandchild but with dots",
			}
		},
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
			ChildWithKidsDots,
		},
	}
</script>

<template>
	<div class="wrapper">
		<h1>{{ title }}</h1>
		<button @click="increment">+</button>
		<button @click="decrement">-</button>
		<p>{{ count }}</p>

		<template v-for="i in count" :key="i">
			<div class="dot"></div>
		</template>

		<ChildWithKidsDots></ChildWithKidsDots>
		<ChildWithKidsDots></ChildWithKidsDots>

	</div>
</template>

<style scoped>
	.wrapper {
		border: 1px dotted red;
		padding: 1rem;
	}

	.dot {
		width: 2rem;
		height: 2rem;
		background-color: red;
		border-radius: 50%;
		display: inline-block;

		& + & {
			margin-left: .5rem;
		}
	}
</style>