<template>
	<nav>
		<RouterLink v-bind:to="{ name: 'home' }">
			<BaseButton>Home</BaseButton>
		</RouterLink>
		<RouterLink v-bind:to="{ name: 'about' }">
			<BaseButton>About Me</BaseButton>
		</RouterLink>
		<RouterLink v-bind:to="{ name: 'projects' }">
			<BaseButton>Projects</BaseButton>
		</RouterLink>
		<RouterLink v-bind:to="{ name: 'photos' }">
			<BaseButton>Photography</BaseButton>
		</RouterLink>
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
