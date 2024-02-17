<template>
	<button><slot>placeholder</slot></button>
</template>

<script lang="ts">
export default {
	props: {
		label: String,
	},
};
</script>

<style scoped>
button {
	background-color: lightblue;
	border: 1px blue solid;
	border-radius: 5px;
	margin: 0 5px;
	transition: box-shadow 100ms, transform 100ms;
}

button:hover {
	cursor: pointer;
	box-shadow: 2px 2px grey;
	transform: translate(-2px, -2px);
}

button:active {
	box-shadow: none;
	transform: none;
}
</style>
