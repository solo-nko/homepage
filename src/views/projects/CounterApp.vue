<template>
	<main id="grid-container">
		<h1 class="grid-row theme-text">Counter App</h1>
		<div id="counterResult" class="grid-row theme-text">{{ count }}</div>

		<base-button id="incrButton" class="theme-text" v-on:click="increaseCount()">Increment</base-button>
		<base-button id="decrButton" class="theme-text" v-on:click="decreaseCount()">Decrement</base-button>
		<base-button id="resetButton" class="theme-text" v-on:click="resetCount()">Reset to 0</base-button>

		<div id="skipDiv" class="grid-row">
			<label for="" class="theme-text"
				>Skip to
				<input type="number" inputmode="numeric" v-on:change="setCount($event)" />
			</label>
		</div>
	</main>
</template>

<script setup lang="ts">
import { ref } from "vue";

let count = ref(0);

function increaseCount(incrementAmount = 1): void {
	count.value += incrementAmount;
}

function decreaseCount(decrementAmount = 1): void {
	count.value -= decrementAmount;
}

function resetCount() {
	count.value = 0;
}

function setCount(event: Event) {
	// see https://freshman.tech/snippets/typescript/fix-value-not-exist-eventtarget/
	// for why the 'as' part is needed
	const target = event.target as HTMLInputElement;
	if (target != null) {
		count.value = Number(target.value);
		target.value = "";
	}
}
</script>

<style scoped>
.theme-text {
	font-family: 'Noto Sans', sans-serif;
	/* color: var(--textColorDarkTheme); */
}

#grid-container {
	display: grid;
	grid-template-rows: 2fr 1fr 1fr 1fr;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-areas:
		"header header header"
		"counter counter counter"
		"button1 button2 button3"
		"skip skip skip";
	gap: 1rem;
	padding: 0 1rem;
	background-color: var(--backgroundColorDarkTheme);
}

h1 {
	grid-area: header;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 3rem;
}

#counterResult {
	grid-area: counter;
	font-size: 3rem;
	text-align: center;
}

button {
	background-color: var(--buttonColorDarkTheme);
}

#incrButton {
	grid-area: button1;
}

#decrButton {
	grid-area: button2;
}

#resetButton {
	grid-area: button3;
}

#skipDiv {
	grid-area: skip;
	display: flex;
	justify-content: center;
}


</style>
