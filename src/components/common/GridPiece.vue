<template>
	<div id="piece-body" />
</template>

<script setup lang="ts">

const props = defineProps({
	foregroundColor: {
		type: String,
		default: ""
	},
	backgroundColor: {
		type: String,
		default: ""
	}
});

</script>

<style scoped>
#piece-body {
	width: 100%;
	height: 100%;
	background-color: v-bind(foregroundColor);
	border: 1px solid black;
}
</style>
