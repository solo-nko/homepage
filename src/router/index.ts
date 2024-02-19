import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import PhotosView from "../views/PhotosView.vue";
import CounterApp from "../views/projects/CounterApp.vue";

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
		{
			path: "/projects/counter",
			name: "counterApp",
			component: CounterApp,
		},
		{
			path: "/photos",
			name: "photos",
			component: PhotosView,
		},
	],
});

export default router;
