<template>
	<main>
		<h1>Projects</h1>
		<p>Here I keep links to notable projects I've made or am working on.</p>
		<table>
			<thead>
				<tr>
					<td>Project</td>
					<td>Description</td>
					<td>Tech Used</td>
				</tr>
			</thead>
			<tbody>
				<tr>
					<RouterLink :to="{ name: 'counterApp' }"><td>Counter App</td></RouterLink>
					<td>A simple incremental counter.</td>
					<td>Vue, TypeScript, HTML+CSS</td>
				</tr>
				<tr>
					<td>PixelSketch</td>
					<td>A basic drawing tool</td>
				</tr>
			</tbody>
		</table>
	</main>
</template>

<script lang="ts">
export default {};
</script>
