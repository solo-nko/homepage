<template>
	<footer>
		<base-button v-on:click="flipTheme()">Toggle Theme</base-button>
		<div></div>
		Nick C, 2024
	</footer>
</template>

<script setup lang="ts">
import { flipTheme, currentTheme } from "@/store/ThemeData";

</script>

<style scoped lang="scss">
@import "@/assets/main.scss";

footer {
	display: flex;
	justify-content: space-between;
	margin-top: 1rem;
	padding: 1rem;
	box-sizing: border-box;
	width: 100%;
	color: v-bind("currentTheme.text");
	background-color: v-bind("currentTheme.primary");
}

</style>
