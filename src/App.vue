<template>
	<div id="app-container">
		<header><TheNavigation /></header>
		<main id="router-view">
			<RouterView />
		</main>
		<TheFooter />
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
#app-container {
	margin: 0 1rem;
	display: flex;
	flex-direction: column;
	/* height: 100vh; */
}

#router-view {
	flex-grow: 1;
}

td,
table {
	border: 1px gray solid;
	border-collapse: collapse;
}
</style>
