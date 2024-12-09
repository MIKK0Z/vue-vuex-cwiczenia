<script>
	import ChildPremium from './components/ChildPremium.vue';

	export default {
		data() {
			return {
				title: "03: parent -> child -> parent",
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
			ChildPremium,
		},
	}
</script>

<template>
	<div class="wrapper">
		<h1>{{ title }}</h1>
		<button @click="increment">+</button>
		<button @click="decrement">-</button>
		<p>{{ count }}</p>

		<ChildPremium></ChildPremium>
		<ChildPremium></ChildPremium>
	</div>
</template>

<style scoped>
	.wrapper {
		border: 1px dotted red;
		padding: 1rem;
	}
</style>