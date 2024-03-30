<template>
	<button><slot></slot></button>
</template>

<script setup lang="ts">
defineProps({
	fillColor: {
		type: String,
		default: "#cddbfe"
	},
	borderColor: {
		type: String,
		default: "#c43f5e"
	}
})

</script>

<style scoped>
button {
	background-color: v-bind(fillColor);
	border: 1.5px v-bind(borderColor) solid;
	border-radius: 5px;
	margin: 0 5px;
	transition: box-shadow 150ms, transform 150ms;
}

button:hover {
	cursor: pointer;
	box-shadow: 3px 3px #fb0000;
	transform: translate(-3px, -3px);
}

button:active {
	box-shadow: none;
	transform: none;
}
</style>
