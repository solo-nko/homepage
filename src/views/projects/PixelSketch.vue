<template>
	<div id="top-container">
		<section id="intro-sect">
			<h1>Pixel Canvas</h1>
			<p>Click somewhere in the area below to start sketching your masterpiece!</p>
		</section>
		<section id="option-sect">
			<div>
				<label for="btn-piece-color">Draw Color</label>
				<input type="color" name="btn-piece-color" v-on:change="testColor($event)" />
			</div>
			<div>
				<label for="btn-canvas-color">Canvas Color</label>
				<input type="color" name="btn-canvas-color" />
			</div>
			<base-button>Eraser</base-button>
			<base-button>Clear</base-button>
			<div>
				<label for="grid-scale">Size: {{ gridDimension }} x {{ gridDimension }}</label>
				<input
					type="range"
					name="grid-scale"
					min="2"
					max="25"
					v-model="gridDimension"
					v-on:change="createGrid()"
				/>
			</div>
		</section>
		<section id="sketch-sect">
			<div id="sketch-area" :style="canvasStyle">
				<GridPiece v-for="piece in gridDimension * gridDimension" :color="drawColor" />
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">

//the story so far
/* - canvasStyle does not recieve an updated gridDimension value
		- need a way to distinguish individual grid pieces
 */

import { ref } from "vue";
import GridPiece from "@/components/common/GridPiece.vue";

let gridDimension = ref(5);
let canvasStyle = ref(
	`grid-template-rows: repeat(${gridDimension.value}, 1fr); grid-template-columns: repeat(${gridDimension.value}, 1fr);`
);

let drawColor = ref('')

const pieces = [];

function createGrid() {
	pieces.length = 0;
	for (let i = 0; i < gridDimension.value * gridDimension.value; i++) {
		pieces.push(GridPiece);
	}
}

function testColor(event:Event) {
	const color = (event.target as HTMLInputElement).value
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
