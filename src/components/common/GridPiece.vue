<template>
	<div id="piece-body" />
</template>

<script setup lang="ts">
defineProps({
	fillColor: {
		type: String,
		default: "",
	},
	active: {
		type: Boolean,
		default: false,
	},
});
</script>

<style scoped>
#piece-body {
	width: 100%;
	height: 100%;
	background-color: v-bind(fillColor);
	border: 1px dashed gray;
	box-sizing: border-box;
	transition: background-color 100ms linear;
}
</style>
