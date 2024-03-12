<template>
	<nav>
		<RouterLink v-bind:to="{ name: 'home' }">
			<base-button>Home</base-button>
		</RouterLink>
		<RouterLink v-bind:to="{ name: 'about' }">
			<base-button>About Me</base-button>
		</RouterLink>
		<RouterLink v-bind:to="{ name: 'projects' }">
			<base-button>Projects</base-button>
		</RouterLink>
		<RouterLink v-bind:to="{ name: 'photos' }">
			<base-button>Photography</base-button>
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
