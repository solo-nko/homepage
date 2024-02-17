<template>
	<nav>
		<NavButton page="home">Home</NavButton>
		<NavButton page="projects">Projects</NavButton>
		<NavButton page="photos">Photos</NavButton>
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
