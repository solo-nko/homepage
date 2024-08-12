<template>
	<div id="app-container">
		<Teleport to="body">
			<header>
				<TheNavigation />
			</header>
		</Teleport>
		<Teleport to="body">
			<main id="router-view">
				<RouterView />
			</main>
		</Teleport>
		<Teleport to="body">
			<TheFooter />
		</Teleport>
	</div>
</template>

<script setup lang="ts">
import TheNavigation from "./components/singles/TheNavigation.vue";
import TheFooter from "./components/singles/TheFooter.vue";
import { currentTheme } from "@/store/ThemeData";
import { watchEffect } from "vue";

// v-bind() in CSS doesn't work on ancestors of the component, so for the body element we use a different approach
watchEffect(() =>
		document.body.style.backgroundColor = currentTheme.background);

</script>

<style>

.theme-text,
a,
a:visited {
	color: v-bind("currentTheme.text");
}

td,
table {
	border: 3px v-bind("currentTheme.primary") solid;
	border-collapse: collapse;
}
</style>
