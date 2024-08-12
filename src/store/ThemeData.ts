import { reactive } from "vue";
import type { Theme } from "@/types/Theme";

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

export const currentTheme = reactive({
	text: darkTheme.text,
	background: darkTheme.background,
	primary: darkTheme.primary,
	secondary: darkTheme.secondary,
	accent: darkTheme.accent,
});

export let isDarkTheme = true;

export function flipTheme() {
	isDarkTheme = !isDarkTheme;
	if (isDarkTheme) {
		currentTheme.text = darkTheme.text;
		currentTheme.background = darkTheme.background;
		currentTheme.primary = darkTheme.primary;
		currentTheme.secondary = darkTheme.secondary;
		currentTheme.accent = darkTheme.accent;
	} else {
		currentTheme.text = lightTheme.text;
		currentTheme.background = lightTheme.background;
		currentTheme.primary = lightTheme.primary;
		currentTheme.secondary = lightTheme.secondary;
		currentTheme.accent = lightTheme.accent;
	}
}