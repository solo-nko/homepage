<template>
	<nav>
		<NavButton page="home" page-label="Home">Home</NavButton>
		<NavButton page="projects" page-label="Projects">Projects</NavButton>
		<NavButton page="photos" page-label="Photos">Photos</NavButton>
	</nav>
</template>

<script lang="ts">
import NavButton from "../common/NavButton.vue";

export default {
	components: {
		NavButton,
	},
};
</script>
