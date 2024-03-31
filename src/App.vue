<template>
	<div id="app-container">
		<Teleport to="body">
			<header><TheNavigation /></header>
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

<script lang="ts">
import TheNavigation from "./components/singles/TheNavigation.vue";
import TheFooter from "./components/singles/TheFooter.vue";

export default {
	components: {
		TheNavigation,
		TheFooter,
	},
};
</script>

<style>
/* main {
	display: flex;
	flex-direction: column;
	align-items: center;
} */

body {
	background-color: #d2e5ff;
}

td,
table {
	border: 1px gray solid;
	border-collapse: collapse;
}
</style>
