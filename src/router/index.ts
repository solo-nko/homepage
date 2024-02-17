import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import ProjectsView from "../views/ProjectsView.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: "/", redirect: "/home" },
		{
			path: "/home",
			name: "home",
			component: HomeView,
		},
		{
			path: "/projects",
			name: "projects",
			component: ProjectsView,
		},
	],
});

export default router;
