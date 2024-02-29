<template>
	<div id="piece-body" :style="pieceStyle" />
</template>

<script lang="ts">
export default {
	props: {
		color: {
			type: String,
			default: ""
		}
	},
	computed: {
		pieceStyle() {
			return `background-color: ${this.color}`;
		}
	},
};
</script>

<style scoped>
#piece-body {
	width: 100%;
	height: 100%;
}
</style>
