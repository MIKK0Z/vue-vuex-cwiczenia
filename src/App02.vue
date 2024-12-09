<script>
	import Child from './components/Child.vue';

	export default {
		data() {
			return {
				title: "02: parent -> child",
			}
		},
		methods: {
			increment() {
				this.$store.commit("increment");
			},
			decrement() {
				this.$store.commit("decrement");
			},
		},
		computed: {
			count() {
				return this.$store.state.count;
			}
		},
		components: {
			Child,
		},
	}
</script>

<template>
	<div class="wrapper">
		<h1>{{ title }}</h1>
		<button @click="increment">+</button>
		<button @click="decrement">-</button>
		<p>{{ count }}</p>

		<Child></Child>
		<Child></Child>
	</div>
</template>

<style scoped>
	.wrapper {
		border: 1px dotted red;
		padding: 1rem;
	}
</style>