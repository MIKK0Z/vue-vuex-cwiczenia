<script>
	import ChildWithKids from './components/ChildWithKids.vue';

	export default {
		data() {
			return {
				title: "04: parent -> child -> grandchild",
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
			ChildWithKids,
		},
	}
</script>

<template>
	<div class="wrapper">
		<h1>{{ title }}</h1>
		<button @click="increment">+</button>
		<button @click="decrement">-</button>
		<p>{{ count }}</p>

		<ChildWithKids></ChildWithKids>
		<ChildWithKids></ChildWithKids>
	</div>
</template>

<style scoped>
	.wrapper {
		border: 1px dotted red;
		padding: 1rem;
	}
</style>