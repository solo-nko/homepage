<template>
	<nav>
		<NavButton page="home">Home</NavButton>
		<NavButton page="projects">Projects</NavButton>
	</nav>
</template>

<script lang="ts">
import NavButton from "./NavButton.vue";

export default {
	components: {
		NavButton,
	},
};
</script>
