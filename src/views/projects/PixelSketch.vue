<template>
	<div id="top-container">
		<section id="intro-sect">
			<h1>Pixel Canvas</h1>
			<p>Click somewhere in the area below to start sketching your masterpiece!</p>
		</section>
		<section id="option-sect">
			<div>
				<label for="btn-piece-color">Draw Color</label>
				<input type="color" name="btn-piece-color" v-bind:value="foregroundColor" v-on:change="changeForegroundColor($event)">
			</div>
			<div>
				<label for="btn-canvas-color">Canvas Color</label>
				<input type="color" name="btn-canvas-color">
			</div>
			<base-button>Eraser</base-button>
			<base-button>Clear</base-button>
			<div>
				<label for="grid-scale">Size: {{ gridDimension }} x {{ gridDimension }}</label>
				<input v-model.lazy="gridDimension" type="range" name="grid-scale" min="2" max="25">
			</div>
		</section>
		<section id="sketch-sect">
			<div id="sketch-area" v-bind:style="canvasStyle">
				<GridPiece v-for="piece in gridPieces" v-bind:key="piece.id" v-bind:foreground-color="piece.foregroundColor"
					v-bind:background-color="piece.backgroundColor" v-on:piece-click="fillPiece(piece)" />
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">

//the story so far
/* - GridPieces dont update when clicked, i think because their prop isn't actually being changed by fillPiece().
 */

import { computed, onBeforeMount, ref, watch } from "vue";
import GridPiece from "@/components/common/GridPiece.vue";
import type { GridCell } from "@/utils/GridCell";
import Global from "@/utils/Global";

const gridDimension = ref(5);

const gridPieces: GridCell[] = new Array(gridDimension.value * gridDimension.value);

const numOfPieces = computed(() => {
	return gridDimension.value * gridDimension.value;
});

watch(numOfPieces, () => createNewGrid());

onBeforeMount(() => createNewGrid());

function createNewGrid() {
	gridPieces.length = 0;
	for (let i = 0; i < numOfPieces.value; i++) {
		gridPieces.push({
			id: i,
			foregroundColor: "",
			backgroundColor: "",
			active: false
		});
	}
}

const canvasStyle = computed(() => {
	return `grid-template-rows: repeat(${gridDimension.value}, 1fr); grid-template-columns: repeat(${gridDimension.value}, 1fr);`;
});

const foregroundColor = ref(Global.defaultForeground);
const backgroundColor = ref("");

function changeForegroundColor(event: Event) {
	const colorHandler = event.target as HTMLInputElement;
	foregroundColor.value = colorHandler.value;
}

function fillPiece(piece: GridCell) {
	piece.foregroundColor = foregroundColor.value;
	console.log(piece);	
}
</script>

<style scoped>
#top-container {
	display: grid;
	max-width: 800px;
	margin: 0 auto;
	grid-template-areas:
		"top top"
		"opt area";
	gap: 1rem;
	grid-template-columns: 1fr 3fr;
	grid-template-rows: 1fr 3fr;
	max-width: 800px;
}

#intro-sect {
	grid-area: top;
}

#option-sect {
	grid-area: opt;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	padding: 1rem;
}

#option-sect label {
	display: block;
	text-align: center;
}

#sketch-sect {
	grid-area: area;
	padding: 10px;
	aspect-ratio: 1/1;
	min-width: 250px;
	min-height: 250px;
	background-color: aliceblue;
	box-shadow: grey inset 0 0 7px 0;
}

#sketch-area {
	display: grid;
	height: 100%;
	height: 100%;
}

input {
	width: 100%;
}
</style>
