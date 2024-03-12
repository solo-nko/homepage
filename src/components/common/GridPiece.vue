<template>
	<div id="piece-body" v-on:click="$emit('pieceClick')" />
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

defineEmits(["pieceClick"]);
const props = defineProps({
	foregroundColor: {
		type: String,
		default: ""
	},
	backgroundColor: {
		type: String,
		default: ""
	}
});

const computedStyle = computed(() => {
	return `background-color: ${props.foregroundColor}`;
})

</script>

<style scoped>
#piece-body {
	width: 100%;
	height: 100%;
	background-color: v-bind(foregroundColor);
	border: 1px solid black;
}
</style>
