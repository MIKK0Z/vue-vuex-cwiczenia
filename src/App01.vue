<script>
	export default {
		data() {
			return {
				title: "01: Mutations",
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
		}
	}
</script>

<template>
	<div>
		<h1>{{ title }}</h1>
		<button @click="increment">+</button>
		<button @click="decrement">-</button>
		<p>{{ count }}</p>
	</div>
</template>