<template>
	<RouterLink class="button" :to="page!"><base-button>{{ pageLabel }}</base-button></RouterLink>
</template>

<script lang="ts">
export default {
	props: {
		page: String,
		pageLabel: String
	},
};
</script>