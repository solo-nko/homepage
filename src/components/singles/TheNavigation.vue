<template>
	<nav>
		<RouterLink class="nav-link" v-bind:to="{ name: 'home' }">
			<BaseButton>Home</BaseButton>
		</RouterLink>
		<RouterLink class="nav-link" v-bind:to="{ name: 'about' }">
			<BaseButton>About Me</BaseButton>
		</RouterLink>
		<RouterLink class="nav-link" v-bind:to="{ name: 'projects' }">
			<BaseButton>Projects</BaseButton>
		</RouterLink>
		<RouterLink class="nav-link" v-bind:to="{ name: 'photos' }">
			<BaseButton>Photography</BaseButton>
		</RouterLink>
	</nav>
</template>

<script lang="ts">
export default {};
</script>

<style scoped lang="scss">
nav {
	padding: 1rem;
	display: flex;
	justify-content: center;
}

.nav-link {
	margin: 0 1rem;
	:first-child {
		font-size: 120%;
	}
}
</style>
