import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import AboutUs from "./pages/AboutUs.vue";
import ProjectsList from "./pages/ProjectsList.vue";
import NotFound from "./pages/NotFound.vue";
import SingleProject from "./pages/SingleProject.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage,
        },
        {
            path: "/about",
            name: "about",
            component: AboutUs,
        },
        {
            path: "/projects",
            name: "projects",
            component: ProjectsList,
        },
        {
            path: "/projects/:slug",
            name: "single-project",
            component: SingleProject,
        },
        {
            path: "/:pathMatch(.*)*",
            name: "not-found",
            component: NotFound,
        },

    ],
});

export { router };