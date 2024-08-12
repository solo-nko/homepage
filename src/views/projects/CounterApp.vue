<template>
	<div id="grid-container">
		<div id="header-row" class="grid-row theme-text">
			<h1>Counter App</h1>
			<p>(Keyboard shortcuts in parenthesis)</p>
		</div>

		<div id="counterResult" class="grid-row theme-text">{{ count }}</div>

		<BaseButton id="incrButton" class="theme-text enlarged-text" v-on:click="increaseCount(delta)">Increment <br>( + )
		</BaseButton>
		<BaseButton id="decrButton" class="theme-text enlarged-text" v-on:click="decreaseCount(delta)">Decrement <br>( - )
		</BaseButton>
		<BaseButton id="resetButton" class="theme-text enlarged-text" v-on:click="resetCount()">Reset to 0 <br>( Z )
		</BaseButton>

		<div id="inputs-container" class="grid-row">
			<label class="theme-text">Change by</label>
			<input type="number" inputmode="numeric" value="1" min="1" v-on:change="changeDelta($event)" ref="deltaInput">
			<label for="" class="theme-text">Skip to</label>
			<input type="number" inputmode="numeric" v-on:change="setCount($event)" ref="setInput" />
		</div>
	</div>
	<div id="history-container" class="theme-text">
		<div id="history-header">
			<h2>History</h2>
			<BaseButton v-on:click="addToHistory">Add to History</BaseButton>
		</div>
		<ul>
			<li v-for="(history, index) in historyList" v-bind:key="index">
				Count: {{ history.count }}, Date: {{ history.date }}
				<BaseButton v-on:click="removeFromHistory(index)">Delete</BaseButton>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import BaseButton from "@/components/common/BaseButton.vue";
import type { CountHistoryItem } from "@/types/CountHistoryItem";
import { constructDateReadable } from "@/types/CountHistoryItem";
import { onMounted, onUnmounted, ref } from "vue";

const count = ref(0);
const delta = ref(1);
const historyList = ref<CountHistoryItem[]>([]);
const deltaInput = ref<Element | null>(null);
const setInput = ref<Element | null>(null);

onMounted(() => {
	document.addEventListener("keyup", keyHandler);
	// load history from browser storage, if it exists
	const parsedHistory = JSON.parse(localStorage.getItem("historyList") || "");
	if (parsedHistory) historyList.value = parsedHistory;
});

onUnmounted(() => {
	document.removeEventListener("keyup", keyHandler);
});

// keyboard shortcuts
function keyHandler(event: KeyboardEvent | undefined) {
	if (
			event &&
			/*	activeElement is a property that displays which element is in focus. Typically, that will either be the whole document,
			or one of the input elements. so we see if one of the input elements is currently in focus */
			document.activeElement != deltaInput.value &&
			document.activeElement != setInput.value) {
		if (event.key == "+") increaseCount(delta.value);
		else if (event.key == "-") decreaseCount(delta.value);
		else if (event.key == "z") resetCount();
	}
}

function increaseCount(incrementAmount = 1): void {
	count.value += incrementAmount;
}

function decreaseCount(decrementAmount = 1): void {
	count.value -= decrementAmount;
}

function addToHistory() {
	historyList.value.push(
			{
				id: historyList.value.length,
				count: count.value,
				date: constructDateReadable(new Date())
			}
	);
	localStorage.setItem("historyList", JSON.stringify(historyList.value));
	console.log(localStorage);
}

function removeFromHistory(historyId: number) {
	historyList.value.splice(historyId, 1);
	localStorage.setItem("historyList", JSON.stringify(historyList.value));
	console.log(localStorage);
}

function resetCount() {

	addToHistory();
	// reset count
	count.value = 0;
	// reset "change by" value internally
	delta.value = 1;
	// reset "change by" field
	const deltaField = deltaInput.value as HTMLInputElement;
	if (deltaField) deltaField.value = String(delta.value);
}

function changeDelta(event: Event) {
	const target = event.target as HTMLInputElement;
	if (target) {
		const targetValue = Number(target.value);
		if (targetValue < 1) delta.value = 1;
		else delta.value = targetValue;

		target.value = String(delta.value);
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

$maxWidth: 70%;

.theme-text {
	font-family: "Noto Sans", sans-serif;
}

.enlarged-text {
	font-size: 120%;
}

#grid-container,
#history-container {
	max-width: $maxWidth;
	margin: 0 auto;
}

#grid-container {
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

#header-row {
	grid-area: header;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h1 {
		margin-bottom: 0;
	}

	p {
		margin-top: 0;
	}
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

#history-container {
	margin-top: 2rem;
}

#history-header {
	display: flex;

	h2 {
		margin: 0 1rem 0 0;
	}
}
</style>
