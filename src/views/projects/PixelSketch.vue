<template>
	<div id="top-container">
		<section id="intro-sect">
			<h1>Pixel Canvas</h1>
			<p>Click somewhere in the area below to start sketching your masterpiece!</p>
		</section>
		<section id="option-sect">
			<div>
				<label for="btn-piece-color">Draw Color</label>
				<input type="color" name="btn-piece-color" />
			</div>
			<div>
				<label for="btn-canvas-color">Canvas Color</label>
				<input type="color" name="btn-canvas-color" />
			</div>
			<base-button>Eraser</base-button>
			<base-button>Clear</base-button>
			<div>
				<label for="grid-scale">Size: {{ gridDimension }} x {{ gridDimension }}</label>
				<input type="range" name="grid-scale" min="2" max="25" v-model="gridDimension" />
			</div>
		</section>
		<section id="sketch-sect">
			<div id="sketch-area"></div>
		</section>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";

let gridDimension = ref(5);
</script>

<style scoped>
#top-container {
	display: grid;
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
	padding: 1rem;
	aspect-ratio: 1/1;
	min-width: 250px;
	min-height: 250px;
	box-shadow: grey inset 0 0;
}
</style>
