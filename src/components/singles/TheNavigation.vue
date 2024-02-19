<template>
	<nav>
		<RouterLink :to="{ name: 'home' }"><base-button>Home</base-button></RouterLink>
		<RouterLink :to="{ name: 'about' }"><base-button>About Me</base-button></RouterLink>
		<RouterLink :to="{ name: 'projects' }"><base-button>Projects</base-button></RouterLink>
		<RouterLink :to="{ name: 'photos' }"><base-button>Photography</base-button></RouterLink>
	</nav>
</template>

<script lang="ts">
export default {};
</script>

<style scoped>
nav {
	padding: 1rem;
	display: flex;
	justify-content: center;
}
</style>
