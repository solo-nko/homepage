<template>
	<header>
		<TheNavigation></TheNavigation>
	</header>
	<RouterView />
	<TheFooter></TheFooter>
</template>

<script lang="ts">
import { RouterView } from "vue-router";
import TheNavigation from "./components/singles/TheNavigation.vue";
import TheFooter from "./components/singles/TheFooter.vue";

export default {
	components: {
		TheNavigation,
		RouterView,
		TheFooter,
	},
};
</script>
