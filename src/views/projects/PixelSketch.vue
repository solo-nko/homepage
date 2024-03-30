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
				<input v-model="backgroundColor" type="color" name="btn-canvas-color" v-on:change="createNewGrid(true)">
			</div>
			<BaseButton v-bind:fill-color="eraserButtonFillColor" v-on:click="toggleEraser">Eraser</BaseButton>
			<BaseButton v-on:click="createNewGrid()">Clear</BaseButton>
			<BaseButton v-on:click="resetToDefault">Reset to default</BaseButton>
			<div>
				<label for="grid-scale">Size: {{ gridDimension }} x {{ gridDimension }}</label>
				<input v-model.lazy="gridDimension" type="range" name="grid-scale" min="2" max="25">
			</div>
		</section>
		<section id="sketch-sect">
			<div id="sketch-area" v-bind:style="canvasStyle">
				<GridPiece
					v-for="piece in gridPieces" v-bind:key="piece.id" v-bind:fill-color="piece.fillColor"
					v-bind:active="piece.active" v-on:mousedown.prevent="fillPiece($event, true, piece)"
					v-on:mouseenter.prevent="fillPiece($event, false, piece)" />
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
import BaseButton from "@/components/common/BaseButton.vue";

const gridDimension = ref(PixelSketchConfig.defaultDim);
const numOfPieces = computed(() => gridDimension.value * gridDimension.value);
const gridPieces = ref(new Array(numOfPieces.value));
const foregroundColor = ref(PixelSketchConfig.defaultForeground);
const backgroundColor = ref(PixelSketchConfig.defaultBackground);
const eraserButtonFillColor = ref("#cddbfe");
let eraserActive: boolean = false;

//when number of gridpieces changes, create a new grid
watch(numOfPieces, () => createNewGrid());

// this makes is to the background color actively changes as you mess around with the slider. that's not a bad thing, but i preferred to have the color apply when the color box is closed
// watch(backgroundColor, () => createNewGrid(true));

onBeforeMount(() => createNewGrid());

/**
 * Resets the grid by emptying the gridPieces array and pushing new squares in with default values.
 * @param partial For when we only want to reset the squares that haven't been "drawn" on, thereby only partially resetting the grid. In this case, the function does not actually empty the array but instead checks each square to see if it's been drawn on, and leaves it alone if so. 
 */
function createNewGrid(partial: boolean = false) {
	if (partial) {
		gridPieces.value.forEach(piece => {
			if (!piece.active) {
				piece.fillColor = backgroundColor.value;
				piece.active = false;
			}
		});
	}
	else {
		gridPieces.value.length = 0;
		for (let i = 0; i < numOfPieces.value; i++) {
			gridPieces.value.push({
				id: Symbol(i),
				fillColor: backgroundColor.value,
				active: false
			});
		}
	}

}

const canvasStyle = computed(() => {
	return `grid-template-rows: repeat(${gridDimension.value}, 1fr); grid-template-columns: repeat(${gridDimension.value}, 1fr);`;
});

function toggleEraser() {
	eraserActive = !eraserActive;
	if (!eraserActive) eraserButtonFillColor.value = "#cddbfe";
	else eraserButtonFillColor.value = "#F5B6B2";
}

function resetToDefault() {
	foregroundColor.value = PixelSketchConfig.defaultForeground;
	backgroundColor.value = PixelSketchConfig.defaultBackground;
	gridDimension.value = PixelSketchConfig.defaultDim;
	createNewGrid();
}

/**
 * Handles click event on grid pieces.
 * @param event the event fired by clicking
 * @param clicking whether the mouse button is being clicked once or held down
 */
function fillPiece(event: Event, clicking: boolean, piece: GridCell) {
	//eraser
	if (eraserActive) {
		//click functionality
		if (clicking) {
			//const targetPiece = event.target as HTMLElement;
			//targetPiece.style.backgroundColor = backgroundColor.value;
			piece.active = false;
			piece.fillColor = backgroundColor.value;
		} else {
			//dragging functionality
			const mouseEvent = event as MouseEvent;
			if (mouseEvent.buttons > 0) {
				// const targetPiece = mouseEvent.target as HTMLElement;
				// targetPiece.style.backgroundColor = backgroundColor.value;
				piece.active = false;
				piece.fillColor = backgroundColor.value;
			}
		}
		//drawing
	} else {
		//click functionality
		if (clicking) {
			// this updates the object in the array but not the component. the component doesn't rerender until one of its prop values are changed
			// piece.id = Symbol();
			piece.active = true;
			piece.fillColor = foregroundColor.value;
			// const targetPiece = event.target as HTMLElement;
			// targetPiece.style.backgroundColor = foregroundColor.value;
		} else {
			//dragging functionality
			const mouseEvent = event as MouseEvent;
			if (mouseEvent.buttons > 0) {
				// const targetPiece = mouseEvent.target as HTMLElement;
				// targetPiece.style.backgroundColor = foregroundColor.value;
				piece.active = true;
				piece.fillColor = foregroundColor.value;
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
