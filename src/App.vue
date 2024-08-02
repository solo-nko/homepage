<template>
  <div id="app-container">
    <Teleport to="body">
      <header>
        <TheNavigation />
      </header>
    </Teleport>
    <Teleport to="body">
      <main id="router-view">
        <RouterView />
      </main>
    </Teleport>
    <Teleport to="body">
      <TheFooter />
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import TheNavigation from "./components/singles/TheNavigation.vue";
import TheFooter from "./components/singles/TheFooter.vue";
import { computed, reactive, ref } from "vue";
import type { Theme } from "@/utils/Theme";

let isDarkTheme = ref(false);
const darkTheme: Theme = {
  text: "#fffaeb",
  background: "#001c2e",
  primary: "#003994",
  secondary: "#444f6f",
  accent: "#03558c"
};

const lightTheme: Theme = {
  text: "#140f00",
  background: "#d1edff",
  primary: "#6ba4ff",
  secondary: "#909bbb",
  accent: "#73c5fc"
};

const currentThemeComputed = computed(() => {
  if (isDarkTheme.value) {
    return darkTheme;
  } else {
    return lightTheme;
  }
});

// need to dynamically access the theme object, not sure how
const currentTheme = reactive({
  background: computed(() => {
    if (isDarkTheme.value) return darkTheme.background;
    else return lightTheme.background;
  })
});


</script>

<style>


body {
  background-color: v-bind("currentTheme.background");
}

td,
table {
  border: 1px gray solid;
  border-collapse: collapse;
}
</style>
