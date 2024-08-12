<template>
	<h1 class="theme-text">Projects</h1>
	<p class="theme-text">Here I keep links to notable projects I've made or am working on.</p>
	<table class="theme-text">
		<thead>
			<tr>
				<td>Project</td>
				<td>Description</td>
				<td>Tech Used</td>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>
					<RouterLink v-bind:to="{ name: 'counterApp' }">Counter App</RouterLink>
				</td>
				<td>A simple incremental counter.</td>
				<td>Vue, TypeScript, HTML+CSS</td>
			</tr>
			<tr>
				<td>
					<RouterLink v-bind:to="{ name: 'pixelsketch' }">PixelSketch</RouterLink>
				</td>
				<td>A basic drawing tool.</td>
				<td>Vue, TypeScript, HTML+CSS</td>
			</tr>
		</tbody>
	</table>
</template>

<script lang="ts">
export default {};
</script>
