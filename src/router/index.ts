import { createRouter, createWebHistory } from "vue-router";

//see tsconfig.app.json to see how the @ mark is defined
import HomeView from "@/views/HomeView.vue";
import ProjectsView from "@/views/ProjectsView.vue";
import PhotosView from "@/views/PhotosView.vue";
import CounterApp from "@/views/projects/CounterApp.vue";
import PixelSketch from "@/views/projects/PixelSketch.vue";
import AboutView from "@/views/AboutView.vue";

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
			path: "/about",
			name: "about",
			component: AboutView,
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
			path: "/projects/pixelsketch",
			name: "pixelsketch",
			component: PixelSketch,
		},
		{
			path: "/photos",
			name: "photos",
			component: PhotosView,
		},
		{
			// everything after the colon triggers dynamic matching. 'home' can be anything, i just chose to call it that. the parenthesis supports regular expression. placing this last in the order translate to "anything that doesn't match the above routes redirects to /home"
			path: "/:home(.*)",
			redirect: "/home",
		},
	],
});

export default router;
