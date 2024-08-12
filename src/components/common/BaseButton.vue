<template>
	<button>
		<slot></slot>
	</button>
</template>

<script setup lang="ts">
import { currentTheme } from "@/store/ThemeData";
defineProps({
	fillColor: {
		type: String,
		default: "#cddbfe",
	},
	borderColor: {
		type: String,
		default: "#c43f5e",
	},
});
</script>

<style scoped>
button {
	color: v-bind("currentTheme.text");
	background-color: v-bind("currentTheme.primary");
	border: 2px v-bind("currentTheme.accent") solid;
	border-radius: 5px;
	margin: 0 5px;
	transition:
		box-shadow 150ms,
		transform 150ms;
}

button:hover {
	cursor: pointer;
	box-shadow: 3px 3px v-bind("currentTheme.accent");
	transform: translate(-3px, -3px);
}

button:active {
	box-shadow: none;
	transform: none;
}
</style>
