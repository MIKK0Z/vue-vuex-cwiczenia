<script>
    export default {
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
    <div class="comp">
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <p>{{ count }}</p>
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
</style>