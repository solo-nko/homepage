<template>
	<nav>
		<NavButton>Home</NavButton>
		<NavButton>Projects</NavButton>
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
