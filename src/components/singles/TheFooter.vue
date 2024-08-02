<template>
	<footer><base-button>Toggle Theme</base-button><div></div>Nick C, 2024</footer>
</template>

<style scoped lang="scss">
@use  "sass:map";
@import "@/assets/main.scss";

footer {
  display: flex;
  background-color: map.get($themes, light, background);
}

</style>
