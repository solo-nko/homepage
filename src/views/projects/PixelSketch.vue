<template>
	<div id="top-container">
		<section id="intro-sect">
			<h1>Pixel Canvas</h1>
			<p>Click somewhere in the area below to start sketching your masterpiece!</p>
		</section>
		<section id="option-sect">
			<div>
				<label for="btn-piece-color">Draw Color</label>
				<input type="color" name="btn-piece-color" v-on:change="changeColor($event)">
			</div>
			<div>
				<label for="btn-canvas-color">Canvas Color</label>
				<input type="color" name="btn-canvas-color">
			</div>
			<base-button>Eraser</base-button>
			<base-button>Clear</base-button>
			<div>
				<label for="grid-scale">Size: {{ gridDimension }} x {{ gridDimension }}</label>
				<input v-model="gridDimension" type="range" name="grid-scale" min="2" max="25" v-on:change="createNewGrid">
			</div>
		</section>
		<section id="sketch-sect">
			<div id="sketch-area" v-bind:style="canvasStyle">
				<!-- <GridPiece v-for="piece in gridPieces || []" v-bind:key="piece" v-bind:color="drawColor" /> -->
				<div v-for="(piece, index) in gridPieces" v-bind:id="String(index)" v-bind:key="piece" class="grid-piece" v-on:mouseenter="fill($event)" v-on:mousedown="fill($event)" />
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
//the story so far
/* - grid size doesn't update correctly. it only updates to the previous value, after setting a new one.
   - need to be able to draw with default color
	 - try using CSS v-bind and v-bind:id to refer to unique divs?
 */

import { computed, ref } from "vue";
const gridDimension = ref(5);

const gridPieces: symbol[] = new Array(gridDimension.value * gridDimension.value);

function fill(event: MouseEvent) {
/* 	const selectedCell = event.target as HTMLElement;
	selectedCell.style.backgroundColor = drawColor.value; */

	if (event.buttons > 0) {
		const selectedCell = event.target as HTMLElement;
		selectedCell.style.backgroundColor = drawColor.value;
	}
}

function createNewGrid() {
	gridPieces.length = 0;
	const totalSize = gridDimension.value * gridDimension.value;
	for (let i = 0; i < totalSize; i++) {
		gridPieces.push(Symbol(`symbol${i}`));
	}
}

const canvasStyle = computed(() => {
	return `grid-template-rows: repeat(${gridDimension.value}, 1fr); grid-template-columns: repeat(${gridDimension.value}, 1fr);`;
});

const defaultColor = "#0000";
let drawColor = ref("");

function changeColor(event: Event) {
	const color = (event.target as HTMLInputElement).value;
	console.log(color);
	drawColor.value = color;
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
