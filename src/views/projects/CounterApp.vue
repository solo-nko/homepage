<template>
	<div id="grid-container">
		<h1 class="grid-row theme-text">Counter App</h1>
		<div id="counterResult" class="grid-row theme-text">{{ count }}</div>

		<BaseButton id="incrButton" class="theme-text enlarged-text" v-on:click="increaseCount(delta)">Increment</BaseButton>
		<BaseButton id="decrButton" class="theme-text enlarged-text" v-on:click="decreaseCount(delta)">Decrement</BaseButton>
		<BaseButton id="resetButton" class="theme-text enlarged-text" v-on:click="resetCount()">Reset to 0</BaseButton>

		<div id="inputs-container" class="grid-row">
			<label class="theme-text">Change by</label>
			<input type="number" inputmode="numeric" value="1" min="1" v-on:change="changeDelta($event)">
			<label for="" class="theme-text">Skip to</label>
			<input type="number" inputmode="numeric" v-on:change="setCount($event)" />
		</div>
	</div>
</template>

<script setup lang="ts">
import BaseButton from "@/components/common/BaseButton.vue";
import { ref } from "vue";

const count = ref(0);
const delta = ref(1);

function increaseCount(incrementAmount = 1): void {
	count.value += incrementAmount;
}

function decreaseCount(decrementAmount = 1): void {
	count.value -= decrementAmount;
}

function resetCount() {
	count.value = 0;
	delta.value = 1;
}

function changeDelta(event: Event) {
	const target = event.target as HTMLInputElement;
	if (target) {
		const targetValue = Number(target.value)
		if (targetValue < 1) delta.value = 1;
		else delta.value = targetValue;

		target.value = String(delta.value)
	}
}

function setCount(event: Event) {
	// see https://freshman.tech/snippets/typescript/fix-value-not-exist-eventtarget/
	// for why the 'as' part is needed
	const target = event.target as HTMLInputElement;
	if (target) {
		count.value = Number(target.value);
		target.value = "";
	}
}
</script>

<style scoped lang="scss">
@use "@/assets/main";

.theme-text {
	font-family: "Noto Sans", sans-serif;
}

.enlarged-text {
	font-size: 120%;
}

#grid-container {
	max-width: 800px;
	margin: 0 auto;
	display: grid;
	grid-template-rows: 2fr 1fr 1fr 1fr;
	grid-template-columns: 1fr 1fr;
	grid-template-areas:
		"header header"
		"counter counter"
		"button1 button2"
		"button3 inputs";
	gap: 1rem;
	padding: 0 1rem;
	background-color: var(--backgroundColorDarkTheme);
}

h1, #counterResult {
	font-size: 4rem;
}

h1 {
	grid-area: header;
	display: flex;
	justify-content: center;
	align-items: center;
}

#counterResult {
	grid-area: counter;
	text-align: center;
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

#inputs-container {
	grid-area: inputs;
	display: grid;
	align-items: center;
	grid-template-columns: 1fr 2fr;
	grid-template-rows: 1fr 1fr;
}
</style>
