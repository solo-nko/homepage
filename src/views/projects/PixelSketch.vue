<template>
	<div id="top-container">
		<section id="intro-sect">
			<h1>Pixel Canvas</h1>
			<p>Click somewhere in the area below to start sketching your masterpiece!</p>
		</section>
		<section id="option-sect">
			<div>
				<label for="btn-piece-color">Draw Color</label>
				<input v-model="foregroundColor" type="color" name="btn-piece-color">
			</div>
			<div>
				<label for="btn-canvas-color">Canvas Color</label>
				<input v-model="backgroundColor" type="color" name="btn-canvas-color">
			</div>
			<base-button v-on:click="toggleEraser">Eraser</base-button>
			<base-button v-on:click="createNewGrid">Clear</base-button>
			<div>
				<label for="grid-scale">Size: {{ gridDimension }} x {{ gridDimension }}</label>
				<input v-model.lazy="gridDimension" type="range" name="grid-scale" min="2" max="25">
			</div>
		</section>
		<section id="sketch-sect">
			<div id="sketch-area" v-bind:style="canvasStyle">
				<GridPiece v-for="piece in gridPieces" v-bind:key="piece.id" v-bind:fill-color="piece.fillColor"
					v-bind:active="piece.active" v-on:mousedown.prevent="fillPiece($event, true)"
					v-on:mouseenter.prevent="fillPiece($event, false)" />
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">

//the story so far
// eraser "works", but there's no visual cues
// next up is setting up the clear button, canvas color and syncing eraser to it

import { computed, onBeforeMount, ref, watch } from "vue";
import GridPiece from "@/components/common/GridPiece.vue";
import type { GridCell } from "@/utils/GridCell";
import PixelSketchConfig from "@/utils/Global";

const gridDimension = ref(5);
const gridPieces: GridCell[] = new Array(gridDimension.value * gridDimension.value);
const numOfPieces = computed(() => gridDimension.value * gridDimension.value);

let eraserActive: boolean = false;

//when num of pieces changes, create a new grid
watch(numOfPieces, () => createNewGrid());

onBeforeMount(() => createNewGrid());

function createNewGrid() {
	gridPieces.length = 0;
	for (let i = 0; i < numOfPieces.value; i++) {
		gridPieces.push({
			id: i,
			fillColor: backgroundColor.value,
			active: false
		});
	}
}

const canvasStyle = computed(() => {
	return `grid-template-rows: repeat(${gridDimension.value}, 1fr); grid-template-columns: repeat(${gridDimension.value}, 1fr);`;
});

const foregroundColor = ref(PixelSketchConfig.defaultForeground);
const backgroundColor = ref(PixelSketchConfig.defaultBackground);

function toggleEraser() {
	eraserActive = !eraserActive;
}

/**
 * Handles click event on grid pieces.
 * @param event the event fired by clicking
 * @param clicking whether the mouse button is being clicked once or held down
 */
function fillPiece(event: Event, clicking: boolean) {
	//eraser
	if (eraserActive) {
		//click functionality
		if (clicking) {
			const targetPiece = event.target as HTMLElement;
			targetPiece.style.backgroundColor = backgroundColor.value;
		} else {
			//dragging functionality
			const mouseEvent = event as MouseEvent;
			if (mouseEvent.buttons > 0) {
				const targetPiece = mouseEvent.target as HTMLElement;
				targetPiece.style.backgroundColor = backgroundColor.value;
			}
		}
		//drawing
	} else {
		//click functionality
		if (clicking) {
			const targetPiece = event.target as HTMLElement;
			targetPiece.style.backgroundColor = foregroundColor.value;
		} else {
			//dragging functionality
			const mouseEvent = event as MouseEvent;
			if (mouseEvent.buttons > 0) {
				const targetPiece = mouseEvent.target as HTMLElement;
				targetPiece.style.backgroundColor = foregroundColor.value;
			}
		}
	}


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
