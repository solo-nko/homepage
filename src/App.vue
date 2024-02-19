<template>
	<div id="app-container">
		<header>
			<TheNavigation></TheNavigation>
		</header>
		<RouterView id="router-view"/>
		<TheFooter></TheFooter>
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
	display: flex;
	flex-direction: column;
	height: 100vh;
}

#router-view {
	flex-grow: 1;
}


</style>
