<script>
    export default {
		computed: {
			count() {
				return this.$store.state.count;
			}
		}
    }
</script>

<template>
    <div class="comp">
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